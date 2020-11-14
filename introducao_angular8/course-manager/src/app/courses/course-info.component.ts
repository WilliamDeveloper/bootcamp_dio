import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course : Course = new Course();

  constructor(private activatedRoute : ActivatedRoute, private courseService: CourseService){}

  ngOnInit(): void {
    let courseId = parseInt(""+this.activatedRoute.snapshot.paramMap.get('id'));
    this.course = this.courseService.retrieveById(courseId)  ;
  }

}