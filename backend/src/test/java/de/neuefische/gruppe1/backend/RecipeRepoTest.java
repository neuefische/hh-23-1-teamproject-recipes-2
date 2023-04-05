package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class RecipeRepoTest {

    @Test
    void getAll_ShouldReturnTrueWhenEmpty() {
        //GIVEN
        RecipeRepo recipeRepo = new RecipeRepo();

        //WHEN
        List<Recipe> actual = recipeRepo.getAll();

        //THEN
        List<Recipe> expected = new ArrayList<>();
        assertEquals(expected, actual);
    }

    @Test
    void getAll_ShouldReturnFalseWhenEmpty() {
        //GIVEN
        RecipeRepo recipeRepo = new RecipeRepo();

        //WHEN
        List<Recipe> actual = recipeRepo.getAll();

        //THEN
        List<Recipe> expected = new ArrayList<>();
        expected.add(new Recipe("1", "Erstes Rezept, voll gut!"));
        expected.add(new Recipe("2","Zweites Rezept, noch besser!"));

        assertNotEquals(expected, actual);
    }
    //TODO for tuesday Test for add Methode + Test for Service class get and add Methode
}
