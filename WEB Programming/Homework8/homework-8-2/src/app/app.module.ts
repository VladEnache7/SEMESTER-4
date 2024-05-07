import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
@NgModule({
    declarations: [
        AppComponent,
        AllNewsComponent,
        AddNewsComponent,
        UpdateNewsComponent,
        LoginComponent,
        ProfileComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [provideHttpClient(withFetch())],
    bootstrap: [AppComponent],
})
export class AppModule {}
