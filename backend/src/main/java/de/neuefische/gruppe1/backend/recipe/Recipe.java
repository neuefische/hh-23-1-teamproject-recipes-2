package de.neuefische.gruppe1.backend.recipe;

import org.springframework.data.annotation.Id;

public record Recipe(
        @Id
        String id,
        String name,
        String description
) {
}