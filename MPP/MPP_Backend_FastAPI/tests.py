import unittest
from fastapi import FastAPI
from starlette.testclient import TestClient
from main import app, MovieBase, MovieModel
from typing import List


class TestMoviesCRUD(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_get_movies(self):
        response = self.client.get("/movies")
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), List)

    def test_add_movie(self):
        movie = MovieBase(name="Test Movie", year=2022, duration="2h", genre="Action", description="Test Description")
        response = self.client.post("/movies", json=movie.dict())
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["name"], "Test Movie")

    def test_get_movie(self):
        # First, add a movie
        movie = MovieBase(name="Test Movie", year=2022, duration="2h", genre="Action",
                          description="Test Description")
        response = self.client.post("/movies", json=movie.dict())
        self.assertEqual(response.status_code, 200)
        movie_id = response.json()["id"]

        # Then, get the movie using the id of the added movie
        response = self.client.get(f"/movies/{movie_id}")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["id"], movie_id)

    def test_update_movie(self):
        # First, add a movie
        movie = MovieBase(name="Test Movie", year=2022, duration="2h", genre="Action", description="Test Description")
        response = self.client.post("/movies", json=movie.dict())
        self.assertEqual(response.status_code, 200)
        movie_id = response.json()["id"]

        # Then, update the movie using the id of the added movie
        movie = MovieBase(name="Updated Movie", year=2022, duration="2h", genre="Action",
                          description="Updated Description")
        response = self.client.put(f"/movies/{movie_id}", json=movie.dict())
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["name"], "Updated Movie")

    def test_delete_movie(self):
        response = self.client.delete("/movies/1")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["message"], "Movie deleted successfully")

    def test_add_bulk_movies(self):
        # get the length of the movies list
        response = self.client.get("/movies")
        self.assertEqual(response.status_code, 200)
        movies_count = len(response.json())

        movies = [
            MovieBase(name=f"Test Movie {i}", year=2022, duration="2h", genre="Action", description="Test Description")
            for i in range(5)]
        response = self.client.post("/movies/bulk/", json=[movie.dict() for movie in movies])
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), movies_count + 5)


if __name__ == "__main__":
    unittest.main()
