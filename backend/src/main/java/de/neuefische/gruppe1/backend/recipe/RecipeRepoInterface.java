package de.neuefische.gruppe1.backend.recipe;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepoInterface extends MongoRepository<Recipe, String> {
}