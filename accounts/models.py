from django.db import models
from django.contrib import auth
#from django.contrib.auth import get_template_names
# Create your models here.

class User(auth.models.User,auth.models.PermissionsMixin):
    image = models.ImageField()

    #
    def __str__(self):
        return "@{}".format(self.username)
