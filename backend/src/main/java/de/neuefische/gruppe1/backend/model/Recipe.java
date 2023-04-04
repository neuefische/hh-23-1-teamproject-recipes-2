package de.neuefische.gruppe1.backend.model;

public record Recipe(
        String id,
        String name
) {

    public Recipe withId(String id) {
        return new Recipe(id, name);
    }
}
