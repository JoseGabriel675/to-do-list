import { Component } from '@angular/core';
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-frase-motivacional',
  templateUrl: './frase-motivacional.component.html',
  styleUrls: ['./frase-motivacional.component.scss'],
  imports: [IonButton, IonCardHeader, IonCardContent, IonCard, IonCardTitle],
})
export class FraseMotivacionalComponent {
  frases: string[] = [
    'Nunca es tarde para empezar de nuevo.',
    'Cree en ti y todo será posible.',
    'Cada día es una nueva oportunidad.',
    'El éxito es la suma de pequeños esfuerzos diarios.',
    'Haz hoy lo que te acerque a tus sueños.'
  ];

  fraseActual: string = 'Presiona el botón para motivarte.';

  mostrarFraseAleatoria() {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseActual = this.frases[indice];
  }
}
