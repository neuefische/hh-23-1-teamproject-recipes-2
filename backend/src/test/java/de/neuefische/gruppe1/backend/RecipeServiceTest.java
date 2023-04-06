package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import de.neuefische.gruppe1.backend.model.RecipeRepoInterface;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@AutoConfigureMockMvc
@SpringBootTest
class RecipeServiceTest {

    private RecipeService recipeService;
    @Mock
    private RecipeRepoInterface recipeRepoInterfaceMock;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        recipeService = new RecipeService(recipeRepoInterfaceMock);
    }

    @Test
    void testGetAll() {
        Recipe recipe1 = new Recipe("1", "Pasta Carbonara");
        Recipe recipe2 = new Recipe("2", "Spaghetti Bolognese");
        Recipe recipe3 = new Recipe("3", "Lasagne");

        List<Recipe> expectedRecipes = Arrays.asList(recipe1, recipe2, recipe3);

        when(recipeRepoInterfaceMock.findAll()).thenReturn(expectedRecipes);

        List<Recipe> actualRecipes = recipeService.getAll();

        Assertions.assertEquals(expectedRecipes.size(), actualRecipes.size());

        for (int i = 0; i < expectedRecipes.size(); i++) {
            Assertions.assertEquals(expectedRecipes.get(i), actualRecipes.get(i));
        }
        verify(recipeRepoInterfaceMock, times(1)).findAll();
    }

    @Test
    void getAll_expectedEmptyList_WhenDataBaseIsEmpty() {
        //GIVEN
        final RecipeRepoInterface recipeRepoInterface = mock(RecipeRepoInterface.class);
        final RecipeService recipeService = new RecipeService(recipeRepoInterface);

        when(recipeRepoInterface.findAll())
                .thenReturn(Collections.emptyList());

        //WHEN
        List<Recipe> actual = recipeService.getAll();
        List<Recipe> expected = new ArrayList<>();

        //THEN
        verify(recipeRepoInterface).findAll();
        assertEquals(actual, expected);

    }

    @DirtiesContext
    @Test
    void addRecipe() {
        //GIVEN
        final RecipeRepoInterface recipeRepoInterface = mock(RecipeRepoInterface.class);
        final RecipeService recipeService = new RecipeService(recipeRepoInterface);

        Recipe pizzaFunghi = new Recipe("1", "Pizza Funghi");
        when(recipeRepoInterface.save(pizzaFunghi))
                .thenReturn(pizzaFunghi);

        //WHEN
        Recipe actual = recipeService.addRecipe(pizzaFunghi);

        //THEN
        verify(recipeRepoInterface).save(pizzaFunghi);
        assertEquals(actual, pizzaFunghi);
    }
}