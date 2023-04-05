package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepoInterface extends MongoRepository <Recipe, String>{
}
