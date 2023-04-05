package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeService recipeService;


    @GetMapping
    public List<Recipe> getAll(){
        return recipeService.getAll();
    }
    @PostMapping
    public Recipe addRecipe(@RequestBody Recipe recipeToAdd) {
        return recipeService.addRecipe(recipeToAdd);
    }
}
/*    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }*/


