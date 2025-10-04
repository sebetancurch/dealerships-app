from django.db import models

# Create your models here.
class CarMake(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.name + " - " + self.description
    
class CarModel(models.Model):

    class CarType(models.TextChoices):
        SEDAN = 'Sedan'
        SUV = 'SUV'
        WAGON = 'Wagon'

    car_make = models.ForeignKey(CarMake, on_delete=models.CASCADE)
    dealer_id = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=50, unique=True)
    type = models.CharField(max_length=20, choices=CarType.choices)
    year = models.IntegerField()

    def __str__(self):
        return self.name + " - " + str(self.year) + " - " + self.type