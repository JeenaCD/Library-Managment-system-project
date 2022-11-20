import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header2Component } from './header2/header2.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Header1Component } from './header1/header1.component';
import { BookserviceService } from './bookservice.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
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
import { LibrarymemdashboardComponent } from './librarymember/librarymemdashboard/librarymemdashboard.component';
import { LibrarymemviewbooksComponent } from './librarymember/librarymemviewbooks/librarymemviewbooks.component';
import { LibrarymemsearchComponent } from './librarymember/librarymemsearch/librarymemsearch.component';
import { ViewrequestbooksComponent } from './librarian/viewrequestbooks/viewrequestbooks.component';



@NgModule({
  declarations: [
    AppComponent,
    Header2Component,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    Header1Component,
    AdminloginComponent,
    AdminnavComponent,
    AdmindashboardComponent,
    AddlibrarianComponent,
    AddlibrarymemComponent,
    ViewlibrarianComponent,
    ViewlibrarymemComponent,
    DeletelibrarianComponent,
    DeletelibrarymemComponent,
    LibrarianloginComponent,
    LibrariannavComponent,
    ViewbooksComponent,
    LibrariandashboardComponent,
    EditbookComponent,
    AddbookComponent,
    LibrarymemloginComponent,
    LibrarymemnnavComponent,
    LibrarymemdashboardComponent,
    LibrarymemviewbooksComponent,
    LibrarymemsearchComponent,
    ViewrequestbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [BookserviceService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
