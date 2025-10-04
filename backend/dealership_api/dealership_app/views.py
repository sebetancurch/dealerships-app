import json
from django.http import JsonResponse
from rest_framework.decorators import  api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import CarMake, CarModel
from .populate import initiate
from .restapis import get_request, analyze_review_sentiments, post_review

"""
Authentication services
"""

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        user = User.objects.get(username=username)
        # Check if password is correct
        if user.check_password(password):
            token, created = Token.objects.get_or_create(user=user)  # Unpack tuple!
            return Response({
                'token': token.key,
                'user_id': user.id,
                'username': user.username,
            }, status=200)
        else:
            return Response(
                {'error': 'Invalid credentials'},
                status=401
            )
    except User.DoesNotExist:
        return Response(
            {'error': 'Invalid credentials'},
            status=401
        )
    
@api_view(['POST'])
@permission_classes([AllowAny])
def logout(request):
    request.user.auth_token.delete()
    return Response(status=200)

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    username_exists = User.objects.filter(username=username).exists()

    if not username_exists:
        user = User.objects.create_user(username=username, password=password)
        token = Token.objects.create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.id,
            'username': user.username,
        }, status=200)
    else:
        return Response(
            {'error': 'Username already exists'},
            status=400
        )

"""
Car dealerchips services
"""
@api_view(['GET'])
@permission_classes([AllowAny])
def get_cars(request):
    count = CarMake.objects.filter().count()
    model_count = CarModel.objects.filter().count()
    print(count)
    if(count == 0 or model_count == 0):
        initiate()
    car_models = CarModel.objects.select_related('car_make')
    cars = []
    for car_model in car_models:
        cars.append({"CarModel": car_model.name, "CarMake": car_model.car_make.name})
    return JsonResponse({"CarModels":cars})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_dealerships(request, state="All"):
    if(state == "All"):
        endpoint = "/fetchDealers"
    else:
        endpoint = "/fetchDealers/"+state
    dealerships = get_request(endpoint)
    return JsonResponse({"status":200,"dealers":dealerships})

@api_view(['GET'])
@permission_classes([AllowAny])
def get_dealer_details(request, id):
    dealership = get_request("/fetchDealer/" + id)
    if dealership.len() > 0:
        return Response({'dealership': dealership[0]}, status=200)
    else:
        return Response({'error': 'Dealership not found'}, status=404)
    
@api_view(['GET'])
def get_dealer_reviews(request, id):
    reviews = get_request("/fetchReviews/dealer/" + id)
    if reviews.len() > 0:
        review_detail = {}
        for review in reviews:
            review_detail[review['id']] = {
                "name": review['name'],
                "review": review['review'],
                "purchase": review['purchase'],
                "purchase_date": review['purchase_date'],
                "sentiment": analyze_review_sentiments(review["review"]),             
            }
        return Response({'reviews': review_detail}, status=200)
    else:
        return Response({'error': 'Reviews not found'}, status=404)

def add_review(request):
    if(request.user.is_anonymous == False):
        data = json.loads(request.body)
        try:
            response = post_review(data)
            return JsonResponse({"status":200})
        except:
            return JsonResponse({"status":401,"message":"Error in posting review"})
    else:
        return JsonResponse({"status":403,"message":"Unauthorized"})