package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    List<Recipe> getAll(){
        return recipeService.getAll();
    }
    @PostMapping
    Recipe addRecipe(@RequestBody Recipe recipeToAdd) {
        return recipeService.addRecipe(recipeToAdd);
    }
}
