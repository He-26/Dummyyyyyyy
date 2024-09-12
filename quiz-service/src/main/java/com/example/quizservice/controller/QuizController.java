 package com.example.quizservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.quizservice.model.QuestionWrapper;
import com.example.quizservice.model.QuizDto;
import com.example.quizservice.model.Response;
import com.example.quizservice.service.QuizService;

import java.util.List;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("quiz")
public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("create")
    public QuizDto createQuiz(@RequestBody QuizDto quizDto){
        QuizDto var= quizService.createQuiz(quizDto.getCategoryName(), quizDto.getNumQuestions(), quizDto.getTitle());
         return var;
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id){
        return quizService.getQuizQuestions(id);
    }

    @GetMapping
    public ResponseEntity<?> getAllCustomers(){
		return new ResponseEntity<>(quizService.getAllQuizes(), HttpStatus.OK);
	}
    
    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> responses){
        return quizService.calculateResult(id, responses);
    }


}
