package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping
    public List<Recipe> getAll() {
        return recipeService.getAll();
    }

    @PostMapping("/add")
    public Recipe addRecipe(@RequestBody Recipe recipeToAdd) {
        return recipeService.addRecipe(recipeToAdd);
    }
}