import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.sass']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() showWarning: boolean = true
@Input() leftSeconds: number = 0
}
