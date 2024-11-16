import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Asegúrate de que ReactiveFormsModule esté correctamente importado
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true, // Haciendo el componente independiente (standalone)
  imports: [IonicModule, ReactiveFormsModule], // Aquí solo importamos los módulos necesarios
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  // Definir el formulario reactivo
  registroForm: FormGroup;

  constructor() {
    // Inicializamos el formulario con los controles y validaciones
    this.registroForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]), // Campo obligatorio
      edad: new FormControl('', [
        Validators.required, 
        Validators.min(1), 
        Validators.max(120), // Límite máximo razonable para la edad
      ]),
      telefono: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[0-9]{10}$'), // Validar que tenga 10 dígitos
      ]),
      observaciones: new FormControl(''), // Campo opcional
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
