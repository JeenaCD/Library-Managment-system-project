import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddlibrarianComponent } from './admin/addlibrarian/addlibrarian.component';
import { AddlibrarymemComponent } from './admin/addlibrarymem/addlibrarymem.component';
import { ViewlibrarianComponent } from './admin/viewlibrarian/viewlibrarian.component';
import { ViewlibrarymemComponent } from './admin/viewlibrarymem/viewlibrarymem.component';
import { DeletelibrarianComponent } from './admin/deletelibrarian/deletelibrarian.component';
import { DeletelibrarymemComponent } from './admin/deletelibrarymem/deletelibrarymem.component';
import { LibrarianloginComponent } from './librarian/librarianlogin/librarianlogin.component';
import { LibrariannavComponent } from './librarian/librariannav/librariannav.component';
import { ViewbooksComponent } from './librarian/viewbooks/viewbooks.component';
import { LibrariandashboardComponent } from './librarian/librariandashboard/librariandashboard.component';
import { EditbookComponent } from './librarian/editbook/editbook.component';
import { AddbookComponent } from './librarian/addbook/addbook.component';
import { LibrarymemloginComponent } from './librarymember/librarymemlogin/librarymemlogin.component';
import { LibrarymemnnavComponent } from './librarymember/librarymemnnav/librarymemnnav.component';
import { LibrarymemviewbooksComponent } from './librarymember/librarymemviewbooks/librarymemviewbooks.component';
import { LibrarymemsearchComponent } from './librarymember/librarymemsearch/librarymemsearch.component';
import { ViewrequestbooksComponent } from './librarian/viewrequestbooks/viewrequestbooks.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselComponent,
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
  },
  {
    path: 'adminnav',
    component: AdminnavComponent,
    children: [
      { path: 'admindashboard', component: AdmindashboardComponent },
      {
        path: 'addlibrarian',
        canActivate: [AuthGuard],
        component: AddlibrarianComponent,
      },
      {
        path: 'addlibrarymember',
        canActivate: [AuthGuard],
        component: AddlibrarymemComponent,
      },
      { path: 'viewlibrarian', component: ViewlibrarianComponent },
      { path: 'viewlibrarymember', component: ViewlibrarymemComponent },
      {
        path: 'deletelibrarian',
        canActivate: [AuthGuard],
        component: DeletelibrarianComponent,
      },
      {
        path: 'deletelibrarymember',
        canActivate: [AuthGuard],
        component: DeletelibrarymemComponent,
      },
    ],
  },
  {
    path: 'librarianlogin',
    component: LibrarianloginComponent,
  },
  {
    path: 'librariannav',
    component: LibrariannavComponent,
    children: [
      { path: 'librariandashboard', component: LibrariandashboardComponent },
      { path: 'viewbooks', component: ViewbooksComponent },
      { path: 'edit', canActivate: [AuthGuard], component: EditbookComponent },
      {
        path: 'addbook',
        canActivate: [AuthGuard],
        component: AddbookComponent,
      },
      {
        path: 'viewrequests',
        canActivate: [AuthGuard],
        component: ViewrequestbooksComponent,
      },
    ],
  },
  {
    path: 'librarymemlogin',
    component: LibrarymemloginComponent,
  },
  {
    path: 'librarymemnnav',
    component: LibrarymemnnavComponent,
    children: [
      { path: 'viewbooksli', component: LibrarymemviewbooksComponent },
      { path: 'searchbook', component: LibrarymemsearchComponent },
    ],
  },
  {
    path: 'logout',
    component: CarouselComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
