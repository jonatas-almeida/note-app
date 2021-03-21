import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/Task';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.page.html',
  styleUrls: ['./modal-edit.page.scss'],
})
export class ModalEditPage implements OnInit {

  editForm: FormGroup;
  taskId: any;
  task: Task;

  constructor(private modalController: ModalController, private fb: FormBuilder, private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.validation();
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  //Validação do formulário
  validation(){
    this.editForm = this.fb.group({
      task_name: ['', Validators.required],
      task_date: ['', Validators.required],
      task_description: ['', Validators.required]
    })
  }
  
  //Alterar a tarefa
  changeTask(){
    this.taskId = Object.assign({id: localStorage.getItem('taskId')}, this.editForm.value);

    this.noteService.putTask(this.taskId).subscribe(
      () => {
        this.closeModal();
        alert("Alterado com sucesso!");
        window.location.reload();
      }, error => {
        console.log(`Não foi possível alterar as informações: ${error.error}`);
      }
    )
  }

}
