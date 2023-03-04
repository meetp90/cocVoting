from django.shortcuts import render
from rest_framework.generics import GenericAPIView, ListCreateAPIView
from .serializers import *
from rest_framework import status,permissions,viewsets
from rest_framework.response import Response

# Create your views here.
# class ElectionView(GenericAPIView):
#     serializer_class = ElectionSerializer
    
#     permission_classes = [permissions.AllowAny]
    
#     def get(self,request):
#         queryset = Election.objects.all()
#         serializer = ElectionSerializer(elections, many=True)
#         return Response(serializer.data)
    
#     def post(self,request):
#         data = request.data
#         serializer = self.serializer_class(data=data)
#         serializer.is_valid(raise_exception = True)
#         election = serializer.save()
#         return Response(serializer.data)

class OpenElectionsView(ListCreateAPIView):
    permission_classes = [permissions.AllowAny]

    queryset = OpenElection.objects.all()
    serializer_class = OpenElectionSerializer

class ClosedElectionsView(ListCreateAPIView):
    permission_classes = [permissions.AllowAny]

    queryset = ClosedElection.objects.all()
    serializer_class = ClosedElectionSerializer

class OpenCandidateViewSet(viewsets.ModelViewSet):
    queryset = OpenCandidate.objects.all()
    serializer_class = OpenCandidateSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return OpenCandidate.objects.all()

    # def perform_create(self,serializer):
    #     serializer.save(organiser = self.request.user)
        
    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)

class ClosedCandidateViewSet(viewsets.ModelViewSet):
    queryset = ClosedCandidate.objects.all()
    serializer_class = ClosedCandidateSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        return ClosedCandidate.objects.all()

    # def perform_create(self,serializer):
    #     serializer.save(organiser = self.request.user)
        
    def update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)