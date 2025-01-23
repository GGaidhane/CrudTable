import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
CrudInterface:crudinterface[]=[]
  constructor(private crudSvs:CrudService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.crudSvs.getDataFromServer("ProductList").subscribe((el:any)=>{
this.CrudInterface=el
  })
}
DeleteData(id:number,index:number){
  const isConfirm=confirm("Are You Sure")
  if(isConfirm){
  let endpoint="ProductList/" + id;
  this.crudSvs.DeleteDataFromServer(endpoint).subscribe((el:any)=>{
    console.log(id)
    this.CrudInterface.splice(index,1)
  })
}
}
}
export interface crudinterface{
  id:any,
  ProductName:string,
  ProductCategory:string,
  ProductPrice:number

}
