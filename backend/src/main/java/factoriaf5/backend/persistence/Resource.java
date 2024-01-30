package factoriaf5.backend.persistence;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name= "resources")
public class Resource {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    Long id;
    String url;
    String title;
    String description;
    LocalDate date;

    public Resource() {
    }

    public Resource(String url, String title , String description, LocalDate date) {
        this.url = url;
        this.title = title;
        this.description = description;
        this.date = date;
    }

    public Resource(Long id, String url, String title, String description, LocalDate date) {
        this.id = id;
        this.url = url;
        this.title = title;
        this.description = description;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getUrl() {
        return url;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDate getDate() {
        return date;
    }
}


