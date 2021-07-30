import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  item={
    name:"",
    position:"",
    organisation:"",
    testimonial:"",
    course_title:"",
    image:""

  }
   gettestimonial(id:any){
   return this.http.get("http://localhost:5000/testimonial/"+id);
  }
  
  
  gettestimonials(){
    return this.http.get("http://localhost:5000/testimonials");
  }

  newTestimonial(image:any,item:any)
  {   

    console.log('inside service upload')
    const formData = new FormData();
    formData.append('file', image);  
    formData.append('name', item.name); 
    formData.append('position', item.position); 
    formData.append('organisation', item.organisation); 
    formData.append('testimonial', item.testimonial); 
    formData.append('course_title', item.course_title);
    formData.append('image', item.image); 
     



    return this.http.post("http://localhost:5000/insert",{"testimonial":item})
    .subscribe(data =>{console.log(data)})
  }
  deletetestimonial(testimonial:any){
    return this.http.post("http://localhost:5000/testimonial/remove/",testimonial);
  }

  editTestimonial(item:any)
  {
    console.log('client update')
    return this.http.post("http://localhost:5000/testimonial/update",item)
    .subscribe(data =>{console.log(`response recieved ${data}`)})
  };
 
  editTestimonialWithImage(image:any, item:any){
    
    console.log('inside service upload')
    const formData = new FormData();
    formData.append('_id', item._id); 
    formData.append('file', image);  
    formData.append('name', item.name); 
    formData.append('position', item.position); 
    formData.append('organisation', item.organisation); 
    formData.append('testimonial', item.testimonial); 
    formData.append('course_title', item.course_title);
    formData.append('image', item.image); 
     

    return this.http.post("http://localhost:5000/testimonial/updateWithFile",formData)
    .subscribe(data =>{console.log(data)})

  }
  }


