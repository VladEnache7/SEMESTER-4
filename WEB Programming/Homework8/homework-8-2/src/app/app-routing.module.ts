import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { ProfileComponent } from './profile/profile.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'all-news', component: AllNewsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'add-news', component: AddNewsComponent },
    { path: 'update-news', component: UpdateNewsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
