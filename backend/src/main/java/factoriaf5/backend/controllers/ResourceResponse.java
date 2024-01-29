package factoriaf5.backend.controllers;

import java.time.LocalDate;

public class ResourceResponse {
    private Long id;
    private String url;
    private String title;
    private String description;
    private LocalDate date;
    
    public ResourceResponse(Long id, String url, String title, String description, LocalDate date) {
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
