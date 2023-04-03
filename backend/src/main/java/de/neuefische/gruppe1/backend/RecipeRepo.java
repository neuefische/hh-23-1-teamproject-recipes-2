package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class RecipeRepo {

    private final Map<String, Recipe> recipes = new HashMap<>();

    public List<Recipe> getAll(){
        return new ArrayList<>(recipes.values());
    }

    public Recipe addRecipe(Recipe recipeToAdd) {
        recipes.put(recipeToAdd.id(), recipeToAdd);
        return recipeToAdd;
    }
}
