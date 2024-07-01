package com.spec.witrynyinternetowe;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class WitrynyInternetoweApplication {

    @Value("${localhost.hostname}")
    private String localhost;

    @Value("${server.port}")
    private int port;

    @Value("${cors.allowed.origins}")
    private String allowedOrigins;

    public static void main(String[] args) {
        SpringApplication.run(WitrynyInternetoweApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry items) {
                items.addMapping("/api/**").allowedOrigins(allowedOrigins);
            }
        };
    }
}
