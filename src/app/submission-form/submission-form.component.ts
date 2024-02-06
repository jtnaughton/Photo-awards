import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubmissionModalComponent } from '../submission-modal/submission-modal.component';
import { DataSharingService } from '../data-sharing.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.scss'],
})
export class SubmissionFormComponent implements OnInit {
  // TODO: create interface
  formData = {
    name: '',
    email: '',
    photo: null,
    comments: '',
  };

  public submittedForm: boolean = false;

  public submissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.submissionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo: [null, Validators.required],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.submissionForm.valid) {
      this.submittedForm = true;
      this.formData = this.submissionForm.value;
      this.openModal();
    } else {
      console.log('Form is invalid');
    }

    // Update data sharing service with the form data
    this.dataSharingService.updateFormData(this.formData);
  }

  openModal() {
    const modalRef = this.modalService.open(SubmissionModalComponent);
    modalRef.componentInstance.modalTitle = 'Submission Successful';
    modalRef.componentInstance.modalContent = 'Thank you for your submission!';
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.formData.photo = file;
  }
}
