import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Asegúrate de que ReactiveFormsModule esté correctamente importado
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Si necesitas usar HTTP, pero para este formulario básico no es necesario

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
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.min(1)]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      observaciones: new FormControl(''),  // Nuevo campo para observaciones
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
    alert('Paciente registrado con éxito!');

    // Limpiar el formulario después de enviarlo
    this.registroForm.reset();
  }
}
