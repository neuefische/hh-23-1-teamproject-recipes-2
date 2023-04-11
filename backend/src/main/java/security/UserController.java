package security;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recipes/users")

public class UserController {
    @GetMapping
    public String getTest(){
        return "Test";
    }
}
