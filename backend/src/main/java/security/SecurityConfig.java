package security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

public class SecurityConfig {

    @Bean
    public InMemoryUserDetailsManager userDetailsService(){
        return new InMemoryUserDetailsManager(
                User.builder()
                        .username("frank")
                        .password("frank1")
                        .roles("BASIC")
                        .build(),
                User.builder()
                        .username("diggi")
                        .password("doggi")
                        .roles("HASAN")
                        .build()
        );
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf().disable()
                .httpBasic().and()
                .authorizeHttpRequests()
                .requestMatchers("/api/recipes/add").authenticated()
                .requestMatchers("/api/recipes/users").authenticated()
                .requestMatchers("/api/recipes").permitAll()
                .anyRequest().permitAll()
                .and()
                .formLogin()
                .and().build();
    }
}
