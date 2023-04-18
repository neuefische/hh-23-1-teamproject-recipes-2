package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import de.neuefische.gruppe1.backend.model.RecipeRepoInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RecipeService {

    private final RecipeRepoInterface recipeRepoInterface;

    public List<Recipe> getAll() {
        return recipeRepoInterface.findAll();
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepoInterface.save(recipe);
    }

    public Recipe getRecipeById(String id) {
        return recipeRepoInterface.findById(id).orElseThrow();
    }

    public Recipe editRecipe(Recipe recipeToEdit) {
        return recipeRepoInterface.save(recipeToEdit);
    }

    public void deleteRecipe(String id){
        recipeRepoInterface.deleteById(id);
    }
}