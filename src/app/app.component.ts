import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'fundamentos';
  //PROPIEDADES GLOBALES

  nombre = 'Isaí';
  anios_estudiando = 10;
  email = 'ig410902@gmail.com';
  activo = false;
  alumnos = [10,15,20,25];
  contador = 0;
  desactivarBoton = true;
  //propiedad produstos
  productos = [
    {
      id : 1,
      descripcion: 'Coctel',
      precio: 20.50
    },
    {
      id : 2,
      descripcion: 'Camaron',
      precio: 85.16
    },
    {
      id : 1,
      descripcion: 'Agua de piña',
      precio: 1000
    }
  ];
  

  //funcion que muestra si esta actuvo o no
  //funciones y propiedades con miniscula al principio
  esActivo(){
    if (this.activo == true){
      return 'Estudiante Activo'
    }else{
      return 'Estudiante innactivo'
    }
  }

  //funcion que sume los elementos del arreglo de alumnos
  sumarAlumnos(){
    let suma = 0;

    for(let i=0;i<this.alumnos.length; i++){
      suma = suma + this.alumnos[i];
    }

    return suma;
  }

  //funcion que genere numeros aleatorios del 1 al 3
  generarNumeros(){
    return Math.floor(Math.random() * 3) + 1;
    
  }

  //función INCREMENTO DE CONTADOR
  incrementarContador(){
    this.contador ++;
  }

  //función decremento de contador
  decrementarContador(){  
    this.contador --;
  }

  //función para cambiar el valor de propiedad desactivar boton
  cambiarValor(){
    this.desactivarBoton = false;
  }
}
