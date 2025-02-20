package com.hef;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
	
	

	@Configuration
	public class SecurityConfig {


		@Bean
		public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
			 http.csrf().disable()  
		        .cors() // Enable CORS
		        .and()
		        .authorizeHttpRequests(auth -> auth
		            .requestMatchers("/admin/**").hasRole("ADMIN")
		            .requestMatchers("/employee/**").hasRole("EMPLOYEE")
		            .requestMatchers("/api/admin/save").permitAll() 
		            .requestMatchers("/api/admin/findbyid/{id}").permitAll() 
		            .requestMatchers("/api/admin/findall").permitAll() 
		            .requestMatchers("/api/admin/update/{id}").permitAll() 
		            .requestMatchers("/api/admin/deletbyid/{id}").permitAll() 
		            .requestMatchers("/api/emp/findall").permitAll() 
		            .requestMatchers("/api/emp/findbyid/{id}").permitAll() 
		            
		            
		        )
		        .formLogin()
		        .and()
		        .logout();

		    return http.build();
		}


	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

	    @Bean
	    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
	        AuthenticationManagerBuilder authBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);

	        authBuilder
	            .inMemoryAuthentication()
	            .withUser("admin")
	            .password(passwordEncoder().encode("admin123"))
	            .roles("ADMIN")
	            .and()
	            .withUser("employee")
	            .password(passwordEncoder().encode("employee123"))
	            .roles("EMPLOYEE");

	        return authBuilder.build();
	    }
	}


