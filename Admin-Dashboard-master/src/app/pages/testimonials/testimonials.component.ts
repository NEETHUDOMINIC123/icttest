import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { TestimonialformComponent } from '../testimonialform/testimonialform.component';
import { TestService } from '../test.service';
import { DeletetestimonialComponent } from '../deletetestimonial/deletetestimonial.component';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder,  NbCheckboxComponent  } from '@nebular/theme';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'ngx-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  index:any;
  testimonials:any;
  srchName='';
  
  public searchTestimonialName: any = '';
 

   // testimonials=[{
   //   name:"",
   //   position:"",
   //   organisation:"",
    //  testimonial:"",
    //  course_title:"",
    //  Image:""
   // }]

    constructor(private windowService:NbWindowService,private testService:TestService,private router:Router,private route: ActivatedRoute ) { }
    
  
    ngOnInit(): void {
  
        this.testService.gettestimonials().subscribe((data)=>{
        this.testimonials=JSON.parse(JSON.stringify(data));
      })
    }

    onDrop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.testimonials, event.previousIndex, event.currentIndex);
    }
    resetSearch(){
      this.srchName='';
      
    }
    addTestimonial(){
      this.router.navigate(['../addtestimonial'], { relativeTo: this.route });
   }
   //delete
   deleteStaff(staff){
    // console.log('inside delete')
    // localStorage.setItem("adminDeleteStaffID", staff._id.toString());
     this.windowService.open(DeletetestimonialComponent,{ title: `delete Testimonial` });

   }

   // viewCourse(course : any) {
    //  localStorage.setItem("adminViewCourseID", course._id.toString());
     
    // this.router.navigate(['../viewcourse'], { relativeTo: this.route });
 
  // }
   
  
  editTestimonial(testimonial : any) {
    
     localStorage.setItem("adminEditTestimonialID", testimonial._id.toString());
     this.router.navigate(['../edittestimonial'], { relativeTo: this.route });
   }
 
  // saveCourseIndex(){
  //  console.log(this.testimonials);
  //  for(let i= 0; i<this.testimonials.length; i++){
  //  this.testimonials[i].index=i;  
  //  this.testService.updateTestimonialsIndex(this.testimonials[i])
   // .subscribe((staff)=>{
   //   console.log(staff);
   // });
 // }
// }

// resetCourseIndex(){
 // let currentUrl = this.router.url;
 // this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //    this.router.navigate([currentUrl]);
 // });
// }
  }