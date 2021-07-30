import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'ngx-viewtestimonial',
  templateUrl: './viewtestimonial.component.html',
  styleUrls: ['./viewtestimonial.component.scss']
})
export class ViewtestimonialComponent implements OnInit {

  testimonialItem:any;
  imgPrev:any;
  name:any;
  position:any;
  organisation:any;
  testimonial:any;
  course_title:any;


  constructor(private testService:TestService) { }

  ngOnInit(): void {

    let testimonialId = localStorage.getItem("adminViewTestimonialID");
    this.testService.gettestimonial(testimonialId).subscribe((data)=>{
    console.log(data);
    this.testimonialItem=JSON.parse(JSON.stringify(data));
    this.imgPrev    = this.testimonialItem.image;
    this.name =this.testimonialItem.name;
    this.position =this.testimonialItem.position;
    this.organisation =this.testimonialItem.organisation;
    this.course_title =this.testimonialItem.course_title;
    this.testimonial =this.testimonialItem.testimonial;
  })
}

}