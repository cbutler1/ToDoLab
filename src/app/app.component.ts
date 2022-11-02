import { Component } from '@angular/core';
import { Task } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ='To Do List';
  hideTask: boolean = false;
  appInput: string ="";
  task: Task[] = [
   {
    title: "Feed the Cat",
    task: false
   },
   {
    title: "Do homeowork",
    task: false
   },
   {
    title: "Call mom to say hello",
    task: true
   },
   {
    title: "Make time for yourself to do something or take a break",
    task: false
   },
   {
    title: "Do the laundry",
    task: false
   }
  ];

  completeTask(event: Task): void {
    this.title.strike;
      this.task.push
      this.task.values
  } 

  addTask(): void {
    
  }
}
