import { Injectable } from '@angular/core';
import { BackEndService } from './backend.service';

@Injectable({
  providedIn: 'root'
})

export class TodoRestService {

  constructor(private backend: BackEndService) { }

  getTaskList() {
    return this.backend.get(`/tasks`);
  }

  createTask() {
    return this.backend.post(`/tasks`, {});
  }

  updateTask(id: any) {
    return this.backend.put(`/tasks/${id}`, {});
  }

  login(user: any) {
    return this.backend.post(`/login`, user);
  }
}
