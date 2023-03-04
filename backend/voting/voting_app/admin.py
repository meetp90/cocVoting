from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(OpenElection)
admin.site.register(ClosedElection)
admin.site.register(OpenCandidate)
admin.site.register(ClosedCandidate)