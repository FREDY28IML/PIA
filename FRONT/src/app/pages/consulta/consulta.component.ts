import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que ReactiveFormsModule esté correctamente importado
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-consulta',
  standalone: true, // Haciendo el componente independiente (standalone)
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
})
export class ConsultaComponent  implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {}

  goToPacientes() {
    this.router.navigate(['/pacientes']);
  }

  goToCollab() {
    this.router.navigate(['/colaboradores']);
  }

  goToCitas() {
    this.router.navigate(['/citas']);
  }
}
