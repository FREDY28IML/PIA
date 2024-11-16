import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './pages/portada/portada.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { RegistroCollabComponent } from './pages/registro-collab/registro-collab.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { CitasComponent } from './pages/citas/citas.component';

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
    {
        path: 'consulta',
        component: ConsultaComponent
    },
    {
        path: '',
        redirectTo: 'registros',
        pathMatch: 'full'
    },
    {
        path: 'registros',
        component: RegistrosComponent
    },
    {
        path: '',
        redirectTo: 'registroCollab',
        pathMatch: 'full'
    },
    {
        path: 'registroCollab',
        component: RegistroCollabComponent
    },
    {
        path: '',
        redirectTo: 'pacientes',
        pathMatch: 'full'
    },
    {
        path: 'pacientes',
        component: PacientesComponent
    },
    {
        path: '',
        redirectTo: 'colaboradores',
        pathMatch: 'full'
    },
    {
        path: 'colaboradores',
        component: ColaboradoresComponent
    },
    {
        path: '',
        redirectTo: 'citas',
        pathMatch: 'full'
    },
    {
        path: 'citas',
        component: CitasComponent
    },
];
