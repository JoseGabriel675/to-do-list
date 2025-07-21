import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  newTask: string = '';
  tasks = [
    { name: 'Estudiar para el examen', completed: false },
    { name: 'Sacar al perro', completed: true },
    { name: 'Revisar el correo', completed: false }
  ];

  addTask() {
    if (this.newTask.trim().length === 0) return;
    this.tasks.push({ name: this.newTask, completed: false });
    this.newTask = '';
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
