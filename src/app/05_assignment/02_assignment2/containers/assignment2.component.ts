import { Component, Input, Output,EventEmitter } from '@angular/core';
import{Todo} from 'src/app/05_assignment/assignment.component';



@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {

  @Input()
  todos:Todo[];
  
  //passes the selected todo as input to other event
  @Input()
  selectedTodo:Todo;
  
  //etracts the selected todo
  @Output()
  todoSelected = new EventEmitter<Todo>();

  //emits the selected todo
  onSelectTodo(todo:Todo)
  {
    this.todoSelected.emit(todo);
    
  }

}