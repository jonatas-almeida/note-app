import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {

  tasks: Task;
  taskId: number;

  constructor(private noteService: NoteService, private actRouter: ActivatedRoute, private router: Router) {
    this.actRouter.params.subscribe(params => this.taskId = params['id']);
  }

  ngOnInit() {
  }


  //Volta pra tela inicial depois de clicar no botão
  btnBack(){
    this.router.navigateByUrl('');
  }

  //Pega todas as tasks (tarefas)
  getTasks(){
    this.noteService.getAllTasks().subscribe(
      (response) => {
        this.tasks = response;
      }
    ), error => {
      const erro = error.error;
      console.log(`Não foi possível pegar as tasks: ${erro}`);
    }
  }


  

}
