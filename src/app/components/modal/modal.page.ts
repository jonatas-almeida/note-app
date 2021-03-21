import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/Task';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  task: Task;
  storageTask: any;
  taskForm: FormGroup;

  constructor(private modalController: ModalController, private noteService: NoteService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.validation();
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  validation(){
    this.taskForm = this.fb.group({
      task_name: ['', Validators.required],
      task_date: ['', Validators.required],
      task_description: ['', Validators.required]
    })
  }

  //Pega todas as tasks (tarefas)
  getTasks(){

    this.noteService.getAllTasks().subscribe(
      (response) => {
        this.task = response;
      }
    ), error => {
      const erro = error.error;
      console.log(`Não foi possível pegar as tasks: ${erro}`);
    }
  }

  editTask(){
    this.task = Object.assign({id: this.task.id}, this.taskForm.value);

    this.noteService.putTask(this.task).subscribe(
      () => {
        this.closeModal();
        alert("Tarefa editada com sucesso!");
      }, error => {
        console.log(error);
      }
    )
  }

  //Adiciona uma task
  addTask(){
    this.task = Object.assign({}, this.taskForm.value);

    this.noteService.postTask(this.task).subscribe(
      (novaTarefa: Task) => {
        alert("Tarefa cadastrada com sucesso!");
        this.closeModal();
        window.location.reload();
        this.getTasks();
      }, error => {
        const erro = error.error;

        erro.array.forEach(element => {
          switch(element.code){
            case 'DuplicatedUserName':
              alert('Tarefa duplicada!');
              break;

            default:
              alert("Error ao tentar cadastrar a tarefa");
              break;
          }
        });
      }
    )
  }

}
