import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //Método Get All
  getAllTasks(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/tasks`);
  }

  //Método Get Task
  getTask(id: number){
    return this.http.get(`${this.baseUrl}/tasks/${id}`);
  }

  //Método Get All Finished
  getAllFinished(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/finished`);
  }

  //Método Post
  postTask(task: Task){
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }

  //Método Post Finished
  postFinishedTask(task: any){
    for(task.id = 0; task.id == task.id; task.id + 1){
      //Caso o ID esteja duplicado ele adiciona + 1. Ex.: id: 1 + 1, id: 2
      return this.http.post(`${this.baseUrl}/finished`, task);
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
