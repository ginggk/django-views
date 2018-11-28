from django.urls import path
from . import views

app_name = 'app'

urlpatterns = [
    path('', views.create, name='create'),
    path('link/<short_code>/', views.show, name='show'),
    path('<short_code>/', views.goto, name='goto')
]
