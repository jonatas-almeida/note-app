import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = 'https://joncheck.nexusdev.com.br'

  constructor(private http: HttpClient) { }

  //Método Get All
  getAllTasks(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/api/task`);
  }

  //Método Get Task
  getTask(id: number){
    return this.http.get(`${this.baseUrl}/api/task/${id}`);
  }

  //Método Get All Finished
  getAllFinished(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/api/task/um_id_aqui/finished`);
  }

  //Método Post
  postTask(task: Task){
    return this.http.post(`${this.baseUrl}/api/task`, task);
  }

  //Método Put Finished
  putFinishedTask(task: any, id: number){
    for(task.id = 0; task.id == task.id; task.id + 1){
      //Caso o ID esteja duplicado ele adiciona + 1. Ex.: id: 1 + 1, id: 2
      return this.http.put(`${this.baseUrl}/api/task/${id}/finished`, task);
    }
  }

  //Método Put
  putTask(task:Task){
    return this.http.put(`${this.baseUrl}/tasks/${task.id}`, task);
  }

  //Método Delete
  deleteTask(id: number){
    return this.http.delete(`${this.baseUrl}/tasks/${id}`);
  }

  //Método Delete de Tarefas finalizadas
  deleteFinishedTask(id: number){
    return this.http.delete(`${this.baseUrl}/finished/${id}`);
  }

}
