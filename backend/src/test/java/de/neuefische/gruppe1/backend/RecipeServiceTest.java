package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import de.neuefische.gruppe1.backend.model.RecipeRepoInterface;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import java.beans.Beans;
import java.util.Collections;
import java.util.List;

import static org.mockito.Mockito.*;


@AutoConfigureMockMvc
@SpringBootTest


public class RecipeServiceTest {

    private final RecipeRepoInterface recipeRepoInterface = mock(RecipeRepoInterface.class);

    @Test
    void getAll_expectedEmptyList_WhenDataBaseIsEmpty(){
        //GIVEN
        when(recipeRepoInterface.findAll())
                .thenReturn(Collections.emptyList());

        //WHEN
        List<Recipe> actual = recipeService.findAll();

        //THEN
        verify(recipeRepoInterface).findAll();
        assertActual.isInstanceOf(List.class).isEmpty();

    }

}


// Test Robin
//    @Test
//    void getAll_ShouldReturnTrueWhenEmpty() {
//        // GIVEN
//        RecipeService recipeService = new RecipeService(new MockRecipeRepo());
//
//        // WHEN
//        List<Recipe> actual = recipeService.getAll();
//
//        // THEN
//        List<Recipe> expected = new ArrayList<>();
//        assertEquals(expected, actual);
//    }

 






