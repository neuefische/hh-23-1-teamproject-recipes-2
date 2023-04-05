package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Service
public class RecipeService {

    private final RecipeRepoInterface recipeRepoInterface;

/*    RecipeService(RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }*/
    List<Recipe> getAll() {
        return recipeRepoInterface.findAll();

    }

    Recipe addRecipe(Recipe recipe){
        return recipeRepoInterface.save(recipe);
    }


/*    public Recipe addRecipe(Recipe addRecipe) {
        String id = UUID.randomUUID().toString();
        Recipe recipeAdd = addRecipe.withId(id);
        return recipeRepo.addRecipe(recipeAdd);
    }*/
}
