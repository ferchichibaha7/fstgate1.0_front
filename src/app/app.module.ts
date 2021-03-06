import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { httpInterceptorProviders } from './Services/Auth/auth-interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatePostComponent } from './home/create-post/create-post.component';
import { FooterComponent } from './home/footer/footer.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { CreateSubComponent } from './home/create-sub/create-sub.component';
import { PostDetailsComponent } from './home/post-details/post-details.component';
import { GetusernamePipe } from './pipe/getusername.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    CreatePostComponent,
    FooterComponent,
    ConfirmAccountComponent,
    CreateSubComponent,
    PostDetailsComponent,
    GetusernamePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    NgbModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    ToastrModule.forRoot() // ToastrModule added


  ],

  entryComponents: [CreatePostComponent,CreateSubComponent,PostDetailsComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
