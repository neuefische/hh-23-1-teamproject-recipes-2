package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    private final RecipeRepo recipeRepo;


    RecipeService(RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }
    public List<Recipe> getAll() {
        return recipeRepo.getAll();

    }
}
