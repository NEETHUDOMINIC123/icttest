import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'ngx-edittestimonial',
  templateUrl: './edittestimonial.component.html',
  styleUrls: ['./edittestimonial.component.scss']
})
export class EdittestimonialComponent implements OnInit {

  
  images:any;
  submitted : boolean = false;
  imageModified : boolean=false;
  imgPrev  : any ='';

  testimonialItem={
    name:"",
    position:"",
    organisation:"",
    testimonial:"",
    course_title:"",
    image:""
  }

  constructor(private testService:TestService, private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
    this.imageModified=false;
    let testimonialId = localStorage.getItem("adminEditTestimonialID");
    this.testService.gettestimonial(testimonialId).subscribe((data)=>{
    console.log(data);
    this.testimonialItem=JSON.parse(JSON.stringify(data));
    this.imgPrev    = this.testimonialItem.image;
  })
  }

  editTestimonial(){
    this.testimonialItem.image = this.testimonialItem.image.replace('C:\\fakepath\\','');
    if (this.imageModified){
      this.testService.editTestimonialWithImage(this.images, this.testimonialItem);
    }
    else{
    this.testService.editTestimonial(this.testimonialItem);
    }
     localStorage.setItem('authorAlertMsg', `The author ${this.testimonialItem.name} is updated`); 
     this.router.navigate(['/pages/testimonials']);   
  
  }

  updateImage(event : any) {
    this.imageModified= true;
    console.log('select image')
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
      console.log('inside if event')
    }
  }

}
