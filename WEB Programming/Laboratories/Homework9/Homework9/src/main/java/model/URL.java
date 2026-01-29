package model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "urls")
public class URL {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "url_id")
    private Long url_id;

    @NotNull
    @Column(name = "link")
    private String link;

    @NotNull
    @Column(name = "popularity")
    private Long popularity;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public URL() {
    }


    public Long getId() {
        return url_id;
    }

    public String getIdString() {
        return url_id.toString();
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Long getPopularity() {
        return popularity;
    }

    public void setPopularity(Long popularity) {
        this.popularity = popularity;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
