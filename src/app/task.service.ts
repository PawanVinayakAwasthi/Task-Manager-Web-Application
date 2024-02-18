// task.service.ts
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private webService: WebRequestService) {}

  get(): Observable<any> { // Update method name to getTasks
    return this.webService.get('tasks');
  }

  createList(title: string): Observable<any> {
    // Implement your createList logic
    // For example, assuming createList API endpoint is /createList
    return this.webService.post('createList', { title });
  }

  // Other methods...
}
