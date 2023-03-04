from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'opencandidate', views.OpenCandidateViewSet)
router.register(r'closedcandidate', views.ClosedCandidateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('openelection/', views.OpenElectionsView.as_view(), name = 'Open Election'),
    path('closedelection/', views.ClosedElectionsView.as_view(), name = 'Closed Election'),

]