import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { FormUserComponent } from './pages/form-user/form-user.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    // ruta principal redirigida a home
    {path:"", pathMatch:"full", redirectTo:"home"},
    
    //rutas especificadas en la firma
    {path:"home", component:HomeComponent},
    {path:"user/:id", component:UserComponent},
    {path:"newuser", component:FormUserComponent},
    {path:"updateuser/:id", component:FormUserComponent},

    //404 para cualquier otra ruta
    {path:"**", component:Error404Component}
];
