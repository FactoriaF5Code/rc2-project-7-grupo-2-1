package factoriaf5.backend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import factoriaf5.backend.persistence.Resource;
import factoriaf5.backend.persistence.ResourceRepository;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class ResourceController {

    private ResourceRepository repository;

    public ResourceController(@Autowired ResourceRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/resources")
    public List<ResourceResponse> resources(){
        List<ResourceResponse> resources = new ArrayList<ResourceResponse>();
        List<Resource> resourcesInDatabase = repository.findAll();
        for(Resource resource: resourcesInDatabase) {
            resources.add(new ResourceResponse(resource.getId(), resource.getUrl(), resource.getTitle(), resource.getDescription(), resource.getDate()));
        }
        return resources;
    }

    @PostMapping("/resources")
    public ResourceResponse createResource(@RequestBody ResourceRequest request) {
        Resource resource = new Resource(request.getUrl(), request.getTitle(), request.getDescription(), request.getDate());
        Resource savedResource = repository.save(resource);
        return new ResourceResponse(savedResource.getId(), savedResource.getUrl(), savedResource.getTitle(), savedResource.getDescription(), savedResource.getDate());
    }

    @DeleteMapping("/resources/{id}")
    public ResponseEntity <ResourceResponse> deleteResource(@PathVariable Long id) {
        return repository.findById(id)
            .map(resource -> { repository.deleteById(resource.getId()); return resource; })
            .map(this::toResourceResponse)
            .map(ResponseEntity::ok)
            .orElseGet(ResponseEntity.notFound()::build);           
    }

    private ResourceResponse toResourceResponse (Resource resource) {
        return new ResourceResponse(resource.getId(), resource.getUrl(), resource.getTitle(), resource.getDescription(), resource.getDate());
    }

}
