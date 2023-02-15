import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
constructor(private userService:UsersService){

}
d:any
VAL:any
ngOnInit(){// automatic call when start the app
  // this.userService.grtalldata()
  // .subscribe(data=>{
  //   this.d=data
  //   console.log(data)
  // })
}
fetchData(){
  this.userService.grtalldata()
  .subscribe(data=>{
    this.d=data
    console.log(data)
  })
}

  submitData(value: any) {
    this.VAL=value
    console.log(value)
    let body={
      name:value.name,
      age:value.age
    }
    this.userService.postData(body)
    .subscribe(response=>{
      console.log(response)
    })
  }
  updateData(value: any) {
    console.log(value)
    let body={
      name:value.name,
     
      newAge:value.newAge
    }
  
    this.userService.postData(body)
    .subscribe(response=>{
      console.log(response)
    })
  }
}
