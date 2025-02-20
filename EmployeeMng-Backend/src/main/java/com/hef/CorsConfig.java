package com.hef;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Allow all endpoints
                        .allowedOrigins("http://localhost:3000") // Specify allowed origins
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");// Specify allowed HTTP methods
//                        .allowedHeaders("*") // Allow all headers
//                        .allowCredentials(true); // Allow cookies and credentials
            }
        };
    }
}

