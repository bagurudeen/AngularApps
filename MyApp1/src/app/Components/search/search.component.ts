import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommunicationService } from 'src/app/Services/communication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm!: FormGroup;

  constructor(private fb: FormBuilder, private communicationService: CommunicationService) { }

  ngOnInit(): void {
      this.searchForm = this.fb.group({
      searchTerm: [''],
      });
  }

  onSubmit(): void {
    console.log(this.searchForm.value);
    this.communicationService.triggerMethod()
  }

}
