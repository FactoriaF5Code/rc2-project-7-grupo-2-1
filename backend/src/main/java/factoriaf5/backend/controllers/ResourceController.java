package factoriaf5.backend.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResourceController {

    @GetMapping("/resources")
    public List<String> resources(){
        return List.of("Recurso 1", "Recurso 2", "Recurso 3");
    }
}
