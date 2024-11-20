import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que ReactiveFormsModule esté correctamente importado
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicioCuidadoresService } from '../../services/caregivers.service';
import {IReqPaciente} from '../../models/paciente/IReqPaciente.interface'

@Component({
  selector: 'app-registro',
  standalone: true, // Haciendo el componente independiente (standalone)
  imports: [IonicModule, ReactiveFormsModule,HttpClientModule], // Aquí solo importamos los módulos necesarios
  providers: [ServicioCuidadoresService],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})

export class RegistroComponent implements OnInit {

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
      edad: new FormControl('', [
        Validators.required, 
        Validators.min(1), 
        Validators.max(120), // Límite máximo razonable para la edad
      ]),
      telefono: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$'), // Validar que tenga 10 dígitos
      ]),
      obs: new FormControl(''), // Campo opcional
    });
  }

  ngOnInit() {}

  // Método para manejar el envío del formulario
  onSubmit(data: IReqPaciente) {
    this.api.setPaciente(data).subscribe(async retorno => {
      console.log(retorno);
    });

    // Si el formulario es válido, obtenemos los valores y los mostramos
    console.log('Formulario enviado con éxito:', this.registroForm.value);
    alert('Usuario registrado con éxito!');

    // Limpiar el formulario después de enviarlo
    this.registroForm.reset();
  }
}



