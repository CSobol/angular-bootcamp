import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;
  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
    this.filters.valueChanges.subscribe(val => console.log(val))
  }

  ngOnInit() {
  }

}
