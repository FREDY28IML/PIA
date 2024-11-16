import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServicioCuidadoresService } from '../../services/caregivers.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
  imports: [
    IonicModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    CommonModule 
  ],
  providers: [ServicioCuidadoresService],
  standalone: true,
})
export class PacientesComponent  implements OnInit {
  Pacientes: any[] = []; // Lista para almacenar los datos del body

  constructor(private PacientesService: ServicioCuidadoresService) {}

  ngOnInit() {
    this.obtenerPacientes();
  }

  // Método para obtener los datos del servicio
  obtenerPacientes() {
    this.PacientesService.getPaciente().subscribe(
      (response: any) => {
        if (!response.error) {
          this.Pacientes = response.body; // Asignar los datos del body
        } else {
          alert('Error al obtener los datos: ' + response.msg);
        }
      },
      (error) => {
        console.error('Error al consumir el servicio:', error);
        alert('Hubo un problema al conectar con el servidor.');
      }
    );
  }
}