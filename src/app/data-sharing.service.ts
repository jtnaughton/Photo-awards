import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private formDataSubject = new BehaviorSubject<any>(null);
  public formData$: Observable<any> = this.formDataSubject.asObservable();

  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }
}
