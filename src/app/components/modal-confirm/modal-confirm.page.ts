import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/Task';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.page.html',
  styleUrls: ['./modal-confirm.page.scss'],
})
export class ModalConfirmPage implements OnInit {

  taskId: string;
  delTask: any;

  constructor(private modalController: ModalController, private actRouter: ActivatedRoute, private noteService: NoteService, private router: Router) {
    this.actRouter.params.subscribe(params => this.taskId = params['id']);
  }

  ngOnInit() {
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    })
  }
  

  //Vai no localStorage pega o item 'taskId' e usa como o parâmetro da função deleteTask() do service
  deleteTask(){
      this.delTask = localStorage.getItem('taskId');
      this.noteService.deleteTask(this.delTask).subscribe(
        () => {
          localStorage.removeItem('taskId');//Remove o taskId do localStorage
          window.location.reload();//Recarrega a página
          this.closeModal();//Fecha o modal
        }, error => {
          console.log(`Não foi possível deletar a tarefa: ${error}`);
        }
      )
  }

}
