package model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long user_id;

    @NotNull
    @Column(name = "username")
    private String username;

    @Email
    @NotNull
    @Column(name = "email")
    private String email;

    @NotNull
    @Column(name = "password")
    private String password;

    @NotNull
    @Column(name = "salt")
    private String salt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = URL.class, fetch = FetchType.EAGER)
    private List<URL> posts = new ArrayList<>();

    public User() {
    }

    public Long getId() {
        return user_id;
    }

    public String getIdString() {
        return user_id.toString();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public List<URL> getURLs() {
        return posts;
    }

    public void setURLs(List<URL> posts) {
        this.posts = posts;
    }

    public void addURL(URL post) {
        posts.add(post);
    }

    public void removeURL(URL post) {
        posts.remove(post);
    }
}
