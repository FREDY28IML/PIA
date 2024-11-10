import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './pages/portada/portada.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'portada',
        pathMatch: 'full'
    },
    {
        path: 'portada',
        component: PortadaComponent
    },
    {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
];
