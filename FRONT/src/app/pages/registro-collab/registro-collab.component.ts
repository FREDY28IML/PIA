import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro-collab',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './registro-collab.component.html',
  styleUrls: ['./registro-collab.component.scss'],
})
export class RegistroCollabComponent  implements OnInit {

  // Definir el formulario reactivo
  registroForm: FormGroup;

  constructor() {
    // Inicializamos el formulario con los controles y validaciones
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]), // Campo obligatorio
      edad: new FormControl('', [
        Validators.required, 
        Validators.min(1), 
        Validators.max(120),
      ]),
      telefono: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$'),
      ]),
      observaciones: new FormControl(''), // Campo opcional
      esEnfermero: new FormControl(false), // Checkbox inicializado en 'false'
    });
  }

  ngOnInit() {}

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.registroForm.invalid) {
      alert('Por favor, complete correctamente todos los campos.');
      return;
    }

    // Si el formulario es válido, obtenemos los valores y los mostramos
    console.log('Formulario enviado con éxito:', this.registroForm.value);
    alert('Usuario registrado con éxito!');

    // Limpiar el formulario después de enviarlo
    this.registroForm.reset();
  }
}