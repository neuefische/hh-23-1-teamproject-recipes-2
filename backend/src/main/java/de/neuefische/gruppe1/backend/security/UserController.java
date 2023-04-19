package de.neuefische.gruppe1.backend.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/api/users")

public class UserController {
/*    @GetMapping
    public String getTest() {
        return "Test";
    }

   @GetMapping("/me")
    public String getMe1(Principal principal1) {
        System.out.println(principal1);
        return principal1.getName();
    }

   @GetMapping("/me")
    public String getMe2(Principal principal2) {
        if (principal2 == null) {
            return "anonymousUser";
        }
        return principal2.getName();
    }*/

    @GetMapping("/me")
    public String getMe() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

    @PostMapping("/login")
    public String login() {
        return SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
    }

}
