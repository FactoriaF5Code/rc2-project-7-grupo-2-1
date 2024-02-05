package factoriaf5.backend.controllers;

import java.time.LocalDate;

public class ResourceRequest {
    private String url;
    private String title;
    private String description;
    private LocalDate date;
    
    public ResourceRequest(String url, String title, String description, LocalDate date) {
        this.url = url;
        this.title = title;
        this.description = description;
        this.date = date;
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
    public void setUrl(String url) {
        this.url = url;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }

    
    
}
