package de.neuefische.gruppe1.backend.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.data.annotation.Id;

public record Recipe(
        @Id
        String id,
        @NotBlank
        @Size(min=3, max=100)
        String name,
        @NotBlank
        @Size(min=30)
        String description
) {
}