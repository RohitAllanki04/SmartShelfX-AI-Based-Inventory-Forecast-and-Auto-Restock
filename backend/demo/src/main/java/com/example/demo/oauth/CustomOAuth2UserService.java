package com.example.demo.oauth;

import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.Repo.UserRepo;
import org.springframework.core.env.Environment;
import org.springframework.security.oauth2.client.userinfo.*;
import org.springframework.security.oauth2.core.*;
import org.springframework.security.oauth2.core.user.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CustomOAuth2UserService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
    private final UserRepo userRepository;
    private final List<String> allowedDomains;

    public CustomOAuth2UserService(UserRepo userRepository, Environment env) {
        this.userRepository = userRepository;
        String[] domains = env.getProperty("oauth2.allowed-domains", String[].class, new String[]{});
        this.allowedDomains = Arrays.asList(domains);
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oauthUser = delegate.loadUser(userRequest);

        String email = (String) oauthUser.getAttribute("email");
        String name = (String) oauthUser.getAttribute("name");
        String hostedDomain = (String) oauthUser.getAttribute("hd"); // Google Workspace domain

        if (email == null) {
            throw new OAuth2AuthenticationException(new OAuth2Error("invalid_email"), "Email not provided by Google");
        }

        // Check allowed domain
        boolean domainAllowed = false;
        if (hostedDomain != null && allowedDomains.contains(hostedDomain)) {
            domainAllowed = true;
        } else if (email.contains("@")) {
            String domain = email.substring(email.indexOf("@") + 1);
            domainAllowed = allowedDomains.contains(domain);
        }

        if (!domainAllowed) {
            throw new OAuth2AuthenticationException(new OAuth2Error("invalid_domain"),
                    "Email domain is not allowed");
        }

        // Create user if not exists
        userRepository.findByEmail(email).orElseGet(() -> {
            User newUser = User.builder()
                    .email(email)
                    .fullName(Optional.ofNullable(name).orElse("Unknown User"))
                    .companyName(hostedDomain != null ? hostedDomain : email.substring(email.indexOf("@") + 1))
                    .role(Role.STORE_MANAGER) // default role
                    .usingOauth(true)
                    .build();
            return userRepository.save(newUser);
        });

        return new DefaultOAuth2User(
                oauthUser.getAuthorities(),
                oauthUser.getAttributes(),
                "email"
        );
    }
}
