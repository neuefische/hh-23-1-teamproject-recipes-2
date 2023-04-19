 package de.neuefische.gruppe1.backend.recipe;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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

    @PostMapping
    public Recipe addRecipe(@RequestBody Recipe recipeToAdd) {
        return recipeService.addRecipe(recipeToAdd);
    }

    @GetMapping("{id}")
    public Recipe getRecipeById(@PathVariable String id) {
        return recipeService.getRecipeById(id);
    }

    @PutMapping(path = {"{id}/update", "{id}"})
    public Recipe editRecipe(@PathVariable String id,@RequestBody Recipe recipeToEdit) {
        if (!recipeToEdit.id().equals(id)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The Recipe does not exist");
        }
        return recipeService.editRecipe(recipeToEdit);
    }

    @DeleteMapping("{id}")
    public void deleteRecipe(@PathVariable String id){
        recipeService.deleteRecipe(id);
    }
}