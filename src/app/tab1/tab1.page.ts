import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../interfaces/Task';
import { NoteService } from '../services/note.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../components/modal/modal.page';
import { ActivatedRoute, Router } from '@angular/router';
import { __assign } from 'tslib';
import { ModalConfirmPage } from '../components/modal-confirm/modal-confirm.page';
import { ModalEditPage } from '../components/modal-edit/modal-edit.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  tasks: Task;
  taskId: number;
  storageTask: any;
  userName: string;
  userGuest: string;
  userMessage: string;

  constructor(private noteService: NoteService, private modalController: ModalController, private actRouter: ActivatedRoute, private router: Router) {
    this.actRouter.params.subscribe(params => this.taskId = params['id']);
  }

  ngOnInit() : void{
    this.getTasks();
    if(localStorage.getItem('user') != null){
      this.getUser();
    }
    else{
      this.router.navigateByUrl('');
    }
  }


  //Abre o modal para cadastrar as tasks
  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage,
      animated: true,
      swipeToClose: true,
      cssClass: 'task-modal'
    });
    return await modal.present();
  }

  //Abre o modal de confirmação de exclusão da consulta
  async openConfirmModal(id: any){
    const modal = await this.modalController.create({
      component: ModalConfirmPage,
      animated: true,
      swipeToClose: true,
      cssClass: 'confirm-modal'
    })
    localStorage.setItem('taskId', id);
    return await modal.present();
  }

  //Abre o modal de atualizar as informações da consulta
  async openEditModal(id: any){
    const modal = await this.modalController.create({
      component: ModalEditPage,
      animated: true,
      swipeToClose: true,
      cssClass: 'edit-modal'
    })
    localStorage.setItem('taskId', id);
    return modal.present();
  }

  //Pega o usuário no localStorage
  getUser(){
    this.userName = localStorage.getItem('user');
    this.userMessage = `Bem-vindo!`;
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
