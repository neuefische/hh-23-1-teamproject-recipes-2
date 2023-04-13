package de.neuefische.gruppe1.backend;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.gruppe1.backend.model.Recipe;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithAnonymousUser;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RecipeIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @WithAnonymousUser
    void getAll_ShouldReturnAllRecipesWithAnonymousUser() throws Exception {
        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                []
                                """
                ));
    }

    @Test
    @WithMockUser
    void getAll_ShouldReturnAllRecipesWithMockUser() throws Exception {
        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                []
                                """
                ));
    }

    @Test
    void expect401_OnGet_whenAnonymousUser() throws Exception {
        mockMvc.perform(get("http://localhost:8080/api/recipes/add"))
                .andExpect(status().isUnauthorized());
    }

    @DirtiesContext
    @Test
    @WithMockUser
    void expectSuccessfulPost() throws Exception {
        String actual = mockMvc.perform(
                        post("http://localhost:8080/api/recipes/add")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""
                                        {"id": "111","name":"Curry","description":"Braten"}
                                        """)
                                .with(csrf())
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                           {
                           "id": "111",
                           "name": "Curry",
                           "description": "Braten"
                           }
                           """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Recipe actualTodo = objectMapper.readValue(actual, Recipe.class);
        assertThat(actualTodo.id())
                .isNotBlank();
    }
}

