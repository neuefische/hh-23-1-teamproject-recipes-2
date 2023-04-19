package de.neuefische.gruppe1.backend.exception;

import java.time.Instant;

public record ApiError(
        String message,
        Instant timestamp
) {
}
