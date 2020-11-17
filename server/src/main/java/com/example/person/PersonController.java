package com.example.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    PersonService personService;

    @GetMapping("/persons")
    public List<Person> getAllPersons(){
        return personService.getAllPersons();
    }

    @GetMapping("/persons/{id}")
    public Person getPerson(@PathVariable int id){
        return personService.getPerson(id);
    }

    @PostMapping("/persons")
    public void addPerson(@RequestBody Person person){
        personService.addPerson(person);
    }

    @DeleteMapping("/persons/{id}")
    public void deletePerson(@PathVariable int id){
        personService.deletePerson(id);
    }

    @PutMapping("/persons/{id}")
    public void updateStudent(@RequestBody Person person, @PathVariable int id){
        personService.updatePerson(id,person);
    }
}
