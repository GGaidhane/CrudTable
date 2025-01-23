import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  ProductForm!:FormGroup
  selectedId:string | null=null
  EditAction:string | null=null
  constructor(private fb:FormBuilder,private crudsvs:CrudService,private router:Router,private activateRoute:ActivatedRoute) {
    console.log(activateRoute)
  this.selectedId=this.activateRoute.snapshot.paramMap.get('id');
  this.EditAction=this.activateRoute.snapshot.queryParamMap.get('action')
  console.log("action",this.EditAction)
  }
  ngOnInit(): void {
    this.reactiveForm()
  if(this.EditAction === 'EDIT'){
    this.getDataById()
  }}
reactiveForm(){
  this.ProductForm=this.fb.group({
"ProductName":[''],
"ProductCategory":[''],
"ProductPrice":['']
  })
}
SubmitForm(){
  if(this.EditAction){
    this.updateData()
  }else{
    this.postData()
  }
  this.navigateTo()
}
postData(){
  let body=this.ProductForm.value
  this.crudsvs.postDataToServer("ProductList",body).subscribe((el:any)=>{
    console.log(el)
  })
}
navigateTo(){
  this.router.navigate(["crudList"])
}
getDataById(){
  let endpoint="ProductList/" + this.selectedId;
  this.crudsvs.getDataFromServer(endpoint).subscribe((el:any)=>{
    this.ProductForm.patchValue(el);
    console.log(el)
  })
}
updateData(){
  let endpoint="ProductList/" + this.selectedId;
  let body=this.ProductForm.value;
  this.crudsvs.updateDataFromServer(endpoint,body).subscribe((el:any)=>{
    console.log(el)
  })
}
}
