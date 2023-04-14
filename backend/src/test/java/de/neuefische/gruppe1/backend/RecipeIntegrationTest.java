package de.neuefische.gruppe1.backend;

import de.neuefische.gruppe1.backend.model.Recipe;
import de.neuefische.gruppe1.backend.model.RecipeRepoInterface;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RecipeIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    RecipeRepoInterface recipeRepoInterface;


    @Test
    @DirtiesContext
    void getAll_ShouldReturnAllRecipes() throws Exception {
        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                []
                                """
                ));
    }

    @Test
    @DirtiesContext
    void getRecipe_ShouldReturnAllRecipeAdded() throws Exception {
        Recipe recipe = new Recipe("666", "Evil Food", "Burn in Hell");
        recipeRepoInterface.save(recipe);
        Recipe recipe2 = new Recipe("333", "Half Evil Food", "Burn in Hell Medium");
        recipeRepoInterface.save(recipe2);

        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                [
                                {
                                "id": "666",
                                "name": "Evil Food",
                                "description": "Burn in Hell"
                                },
                                {
                                "id": "333",
                                "name": "Half Evil Food",
                                "description": "Burn in Hell Medium"
                                }
                                ]
                                """
                ));
    }

    @Test
    @DirtiesContext
    void addRecipe_shouldReturnaddedRecipe() throws Exception {
        mockMvc.perform(post("/api/recipes")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "0815",
                                "name": "Völlig Egal Essen",
                                "description": "Hauptsache etwas im Magen"
                                }
                                """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "id": "0815",
                                "name": "Völlig Egal Essen",
                                "description": "Hauptsache etwas im Magen"
                                }
                                """
                ));
    }

    @Test
    @DirtiesContext
    void getRecipeById_ShouldReturnRecipeWithId() throws Exception {
        Recipe recipe = new Recipe("123", "Hamburger", "Muss gegrillt werden");
        recipeRepoInterface.save(recipe);

        mockMvc.perform(get("/api/recipes/123"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                    {
                                    "id": "123",
                                    "name": "Hamburger",
                                    "description": "Muss gegrillt werden"
                                }
                                    """
                ));
    }
    
    @Test
    @DirtiesContext
    void editRecipe_ById_shouldReturnEditedRecipe() throws Exception {
        mockMvc.perform(put("/api/recipes/1234/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "1234",
                                "name": "Oaklahoma-Burger",
                                "description": "Müssen Zwiebeln drauf"
                                }
                                """
                        ))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {
                                "id": "1234",
                                "name": "Oaklahoma-Burger",
                                "description": "Müssen Zwiebeln drauf"
                                }
                                """
                ));
    }

    @Test
    @DirtiesContext
    void editRecipe_ById_shouldReturnBadRequest() throws Exception {
        mockMvc.perform(put("/api/recipes/1234/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                "id": "12",
                                "name": "BadRequest-Burger",
                                "description": "id stimmt nicht mit id in url überein muss Status 400 > BadRequest kommen"
                                }
                                """
                        ))
                .andExpect(status().isBadRequest());
    }

}

