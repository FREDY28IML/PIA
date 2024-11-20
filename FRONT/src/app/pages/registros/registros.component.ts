import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registros',
  standalone: true, // Haciendo el componente independiente (standalone)
  imports: [IonicModule], // Aquí solo importamos los módulos necesarios
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss'],
})
export class RegistrosComponent implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  goToRegistro() {
    this.router.navigate(['/registro']);
  }

  goToCollab() {
    this.router.navigate(['/registro-collab']);
  }
}
