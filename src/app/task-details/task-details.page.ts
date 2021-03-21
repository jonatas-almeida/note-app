import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  taskId: number;
  details: any = {};

  constructor(private noteService: NoteService, private actRouter: ActivatedRoute, private router: Router) {
    this.actRouter.params.subscribe(params => this.taskId = params['id']);
  }

  ngOnInit() {
    this.getTask();
  }

  //Retorna os dados da 'task' clicada
  getTask(){
    this.noteService.getTask(this.taskId).subscribe(
      (response) => {
        this.details = response;
      }, error => {
        this.router.navigateByUrl('/tabs/tab1');
      }
    )
  }

  //Deleta uma task (tarefa)
  deleteFromTask(){
    this.noteService.deleteTask(this.taskId).subscribe(
      () => {
        window.location.reload();
        this.router.navigateByUrl('/tabs/tab1');
      }
    )
  }

  //Marca uma tarefa como concluída
  markFinished(){
    this.noteService.putFinishedTask(this.details, this.taskId).subscribe(
      () => {
        this.router.navigateByUrl("/tabs/tab1");
        this.deleteFromTask();
        alert("Marcado como concluído!");
      }, error => {
        alert(`Não foi possível concluir a tarefa: ${error.error}`);
      }
    )
  }

}
