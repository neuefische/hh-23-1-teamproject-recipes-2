package de.neuefische.gruppe1.backend.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/recipes/users")

public class UserController {
    @GetMapping
    public String getTest() {
        return "Test";
    }

/*    @GetMapping("/me")
    public String getMe(Principal principal) {
        System.out.println(principal);
        return principal.getName();
    }*/

/*    @GetMapping("/me")
    public String getMe(Principal principal) {
        if (principal == null) {
            return "anonymousUser";
        }
        return principal.getName();
    }*/

    @GetMapping("/me")
    public String getMe() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

}
