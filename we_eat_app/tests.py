from django.test import TestCase

# Create your tests here.

from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Resteraunts
from .serializers import ResterauntSerializer

class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_resteraunt(title="", artist=""):
        if title != "" and artist != "":
            #TODO: Generate UUID (20chars for this object)
            Resteraunts.objects.create(name=title, address=address, city_id=city_id)

    def setUp(self):
        # add test data
        self.create_song("like glue", "sean paul")
        self.create_song("simple song", "konshens")
        self.create_song("love is wicked", "brick and lace")
        self.create_song("jam rock", "damien marley")


class GetAllSongsTest(BaseViewTest):

    def test_get_all_songs(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the songs/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("resteraunts-all", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Songs.objects.all()
        serialized = SongsSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)