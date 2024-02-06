import { Component, Input, OnInit } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.scss'],
})
export class GridDataComponent implements OnInit {
  @Input() formData: any;

  private gridApi!: GridApi;
  
  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    // Subscribe to changes in formData from the shared service
    this.dataSharingService.formData$.subscribe((formData) => {
      this.formData = formData;

      // Update ag-Grid data
      this.rowData.push({
        name: formData.name,
        submission: formData.photo,
        comments: formData.comments,
      });
    });
    this.onGridReady(this.formData);
  }

  onGridReady(params: { api: GridApi }): void {
    this.gridApi = params.api;

    // Update ag-Grid data
    this.updateGridData();
  }

  private updateGridData(): void {
    if (this.gridApi) {
      this.gridApi.setRowData(this.rowData);
    }
  }

  // Renders images within ag-grid cell
  imageCellRenderer(params: { value: string }): HTMLElement {
    const imgElement = document.createElement('img');
    imgElement.src = `assets/${params.value}.jpeg`; // image path
    imgElement.alt = 'Image';
    imgElement.style.width = '50px';

    // Open the image in a new tab when clicked
    imgElement.onclick = function () {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(
          '<html><body style="margin:0;"><img src="' +
            imgElement.src +
            '" style="max-width:100%; max-height:100%;"/></body></html>'
        );
      }
    };

    return imgElement;
  }

  // AG-GRID DATA TODO: Move to JSON file
  rowData = [
    { name: 'Timothy', submission: 'entry2', comments: 'Umbrella rainbow' },
    { name: 'Jade', submission: 'entry1', comments: 'Medellin Communa 13' },
    { name: 'Shantel', submission: 'entry3', comments: 'Guatape Islands' },
    { name: 'Francis', submission: 'entry4', comments: 'Colombia Carribbean' },
    { name: 'Mohammed', submission: 'entry5', comments: 'Minca jungles' },
    { name: 'Graham', submission: 'entry6', comments: 'Funky interior' },
    { name: 'Thomas', submission: 'entry7', comments: '5000m up!' },
    {
      name: 'Paul',
      submission: 'entry8',
      comments: 'As turquoise as it gets!',
    },
    { name: 'Nicholas', submission: 'entry9', comments: 'Tres lagunas' },
    { name: 'Lucy', submission: 'entry10', comments: 'Wildlife in the Andes' },
    { name: 'Ryan', submission: 'entry12', comments: 'Morning traffic' },
    {
      name: 'Olly',
      submission: 'entry13',
      comments: '"Weve got a long way to go!"',
    },
    {
      name: 'Wayne',
      submission: 'entry14',
      comments: 'Spring in the mountains',
    },
    {
      name: 'Keoni',
      submission: 'entry15',
      comments: 'Sunrise in camp, -10 degrees!',
    },
    { name: 'Emiele', submission: 'entry1', comments: 'photo 3' },
    { name: 'Patrick', submission: 'entry2', comments: 'photo 1' },
    { name: 'Ellis', submission: 'entry3', comments: 'photo 2' },
    { name: 'Shaun', submission: 'entry4', comments: 'photo 3' },
    { name: 'Harry', submission: 'entry5', comments: 'photo 1' },
    { name: 'Will', submission: 'entry6', comments: 'photo 2' },
    { name: 'Glenn', submission: 'entry7', comments: 'photo 3' },
    { name: 'Katie', submission: 'entry8', comments: 'photo 1' },
    { name: 'Rolo', submission: 'entry9', comments: 'photo 2' },
    { name: 'Ruby', submission: 'entry10', comments: 'photo 3' },
    { name: 'Nicole', submission: 'entry11', comments: 'photo 1' },
  ];

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    {
      headerName: 'Submission',
      field: 'submission',
      cellRenderer: this.imageCellRenderer.bind(this),
    },
    { headerName: 'Comments', field: 'comments' },
  ];
}
