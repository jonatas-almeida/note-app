import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.page.html',
  styleUrls: ['./finished.page.scss'],
})
export class FinishedPage implements OnInit {

  taskFinished: any = [];
  dismissMessage: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getFinished();
  }

  getFinished(){
    this.noteService.getAllFinished().subscribe(
      (response) => {
        this.taskFinished = response.reverse();
      }
    )
  }

  deleteFinishTask(id: number){
    this.noteService.deleteFinishedTask(id).subscribe(
      () =>{
        this.getFinished();
        this.dismissMessage = "Notificação dispensada";
        if(this.dismissMessage != ""){
          setTimeout(() => {
            this.dismissMessage = "";
          }, 2000)
        }
      }
    )
  }

}
