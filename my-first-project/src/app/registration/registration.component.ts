import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService:UsersService) {

   }
   form=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    ta:new FormControl(''),
    password:new FormControl('')
   })
d:any
  ngOnInit(): void {
  }
saveData(form:any){ 
  console.log(form.value)
}
// submitData(value: any) {
//   console.log(value)
// }
fetchData(){
  this.userService.grtalldata()
  .subscribe(data=>{
    this.d=data
    console.log(data)
  })
}

  submitData(value: any) {
    // this.VAL=value
    console.log(value.name)
    // let body={
    //   name:value.name,
    //   age:value.age
    // }
    // this.userService.postData(body)
    // .subscribe(response=>{
    //   console.log(response)
    // })
  }
  updateData(value: any) {
    console.log(value)
    let body={
      name:value.name,
     
      newAge:value.newAge
    }
// saveData(){

}
}
