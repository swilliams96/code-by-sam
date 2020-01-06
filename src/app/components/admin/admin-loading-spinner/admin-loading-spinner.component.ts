import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-loading-spinner',
  templateUrl: './admin-loading-spinner.component.html',
  styleUrls: ['./admin-loading-spinner.component.scss']
})
export class AdminLoadingSpinnerComponent implements OnInit {
  @Input() colour = 'primary';
  @Input() size: 'small' | 'medium' = 'medium';

  constructor() {}

  ngOnInit() {}
}
