from django.urls import path

from . import views

urlpatterns = [
    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
    path("logout", views.logout, name="logout"),
    path("get_cars", views.get_cars, name="get_cars"),
    path("get_dealerships", views.get_dealerships, name="get_dealerships"),
    path(
        "get_dealerships/<str:state>",
        views.get_dealerships,
        name="get_dealerchips_by_state",
    ),
    path(
        "get_dealer_details/<str:id>",
        views.get_dealer_details,
        name="get_dealer_details",
    ),
    path(
        "get_dealer_reviews/<str:id>",
        views.get_dealer_reviews,
        name="get_dealer_reviews",
    ),
    path("add_review", views.add_review, name="add_review"),
]
