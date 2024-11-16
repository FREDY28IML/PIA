import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ServicioCuidadoresService } from '../../services/caregivers.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  imports: [
    IonicModule, 
    HttpClientModule, 
    ReactiveFormsModule,
    CommonModule 
  ],
  providers: [ServicioCuidadoresService],
  standalone: true,
})
export class CitasComponent implements OnInit {
  visitas: any[] = []; // Lista para almacenar los datos del body

  constructor(private visitasService: ServicioCuidadoresService) {}

  ngOnInit() {
    this.obtenerVisitas();
  }

  // Método para obtener los datos del servicio
  obtenerVisitas() {
    this.visitasService.getVisitas().subscribe(
      (response: any) => {
        if (!response.error) {
          this.visitas = response.body; // Asignar los datos del body
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
