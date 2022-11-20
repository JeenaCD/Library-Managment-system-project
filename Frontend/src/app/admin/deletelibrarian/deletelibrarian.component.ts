import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-deletelibrarian',
  templateUrl: './deletelibrarian.component.html',
  styleUrls: ['./deletelibrarian.component.css']
})
export class DeletelibrarianComponent implements OnInit {

  pageTitle: string = 'List of Librarians';
  librarians = [
    {
      librarianId:'',
      name:'',
      username:'',
      password:''
    },
  ];
  constructor(private adminService:AdminService,public _auth:AuthService ) { }

  ngOnInit(): void {
    this.adminService.getLibrarians().subscribe((data) => {
      this.librarians = JSON.parse(JSON.stringify(data));
  }
)
}

deleteLibrarian(librarian:any){
  this.adminService.deletelibrarian(librarian._id).subscribe((res:any)=>{
      alert(res.msg);
    this.librarians = this.librarians.filter((p) => p !== librarian);
  });
}
}


