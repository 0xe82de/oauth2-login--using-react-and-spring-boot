package com.example.oauth2.oauthlogin.oauth.service;

import com.example.oauth2.oauthlogin.api.entity.user.User;
import lombok.RequiredArgsConstructor;
import com.example.oauth2.oauthlogin.api.repository.user.UserRepository;
import com.example.oauth2.oauthlogin.oauth.entity.UserPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserId(username);
        if (user == null) {
            throw new UsernameNotFoundException("Can not find username.");
        }

        return UserPrincipal.create(user);
    }
}
