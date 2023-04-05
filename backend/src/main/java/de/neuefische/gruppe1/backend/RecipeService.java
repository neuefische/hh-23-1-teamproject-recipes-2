package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import lombok.AllArgsConstructor;
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
    public Recipe addRecipe(Recipe recipe){
        return recipeRepoInterface.save(recipe);
    }

/*    RecipeService(RecipeRepo recipeRepo) {
        this.recipeRepo = recipeRepo;
    }*/
/*    public Recipe addRecipe(Recipe addRecipe) {
        String id = UUID.randomUUID().toString();
        Recipe recipeAdd = addRecipe.withId(id);
        return recipeRepo.addRecipe(recipeAdd);
    }*/
}
