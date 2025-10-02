from rest_framework.decorators import  api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Create your views here.
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

    