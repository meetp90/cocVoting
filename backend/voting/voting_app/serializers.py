from rest_framework import serializers
from .models import *

class OpenElectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = OpenElection
        fields = '__all__'

class ClosedElectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClosedElection
        fields = '__all__'

class OpenCandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = OpenCandidate
        fields = '__all__'

class ClosedCandidateSerializer(serializers.ModelSerializer):

    class Meta:
        model = ClosedCandidate
        fields = '__all__'