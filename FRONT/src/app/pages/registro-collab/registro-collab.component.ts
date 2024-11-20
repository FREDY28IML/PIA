import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicioCuidadoresService } from '../../services/caregivers.service';
import { IReqCollab } from '../../models/collab/IReqCollab.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro-collab',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule,HttpClientModule],
  providers: [ServicioCuidadoresService],
  templateUrl: './registro-collab.component.html',
  styleUrls: ['./registro-collab.component.scss'],
})
export class RegistroCollabComponent  implements OnInit {

  // Definir el formulario reactivo
  registroForm: FormGroup;

  constructor(private router: Router,
    private api: ServicioCuidadoresService,) {
    // Inicializamos el formulario con los controles y validaciones
    this.registroForm = new FormGroup({
      documento: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'), // Validar que tenga 10 dígitos
      ]),
      nombres: new FormControl('', [Validators.required]), // Campo obligatorio
      telefono: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$'),
      ]),
      edad: new FormControl('', [
        Validators.required, 
        Validators.min(1), 
        Validators.max(120),
      ]), // Campo opcional
      enfermero: new FormControl(false), // Checkbox inicializado en 'false'
    });
  }

  ngOnInit() {}

  // Método para manejar el envío del formulario
  onSubmit(data: IReqCollab) {
    this.api.setCollab(data).subscribe(async retorno => {
      console.log(retorno);
    });

    // Si el formulario es válido, obtenemos los valores y los mostramos
    console.log('Formulario enviado con éxito:', this.registroForm.value);
    alert('Usuario registrado con éxito!');

    // Limpiar el formulario después de enviarlo
    this.registroForm.reset();
  }
}