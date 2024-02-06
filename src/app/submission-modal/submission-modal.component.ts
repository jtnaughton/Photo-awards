import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-submission-modal',
  templateUrl: './submission-modal.component.html',
})
export class SubmissionModalComponent {
  @Input() modalTitle: string = '';
  @Input() modalContent: string = '';

  constructor(public activeModal: NgbActiveModal) {}
}
