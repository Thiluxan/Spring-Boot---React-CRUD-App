package com.example.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PersonService {

    @Autowired
    PersonRepo personRepo;

    public List<Person> getAllPersons(){
        List<Person> personList = new ArrayList<>();
        personRepo.findAll().forEach(personList::add);
        return personList;
    }

    public Person getPerson(int id){
        return personRepo.findById(id).orElse(null);
    }

    public void addPerson(Person person){
        personRepo.save(person);
    }

    public void deletePerson(int id){
        personRepo.deleteById(id);
    }

    public void updatePerson(int id, Person person){
        person.setId(id);
        personRepo.save(person);
    }
}
