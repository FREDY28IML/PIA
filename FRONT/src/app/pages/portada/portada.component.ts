import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  imports: [IonicModule],
  standalone: true,
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent  implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  goToRegistro() {
    // Navegar a la página de registro
    this.router.navigate(['/registros']);
  }

  goToConsulta() {
    // Navegar a la página de consulta
    this.router.navigate(['/consulta']);
  }

  goToReservasCitas() {
    // Navegar a la página de reservas de citas
    this.router.navigate(['/reserva']);
  }
}

  
