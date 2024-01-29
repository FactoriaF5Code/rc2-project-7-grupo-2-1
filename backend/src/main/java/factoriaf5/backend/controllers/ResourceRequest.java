package factoriaf5.backend.controllers;

import java.time.LocalDate;

public class ResourceRequest {
    private String url;
    private String title;
    private String description;
    private LocalDate date;
    
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
