package de.neuefische.gruppe1.backend.model;

import org.springframework.data.annotation.Id;

public record Recipe(
        @Id
        String id,
        String name
) {
}