import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() aboutSectionId = 'about';
  @Input() projectsSectionId = 'projects';
  isCollapsed = true;

  constructor(public scrollService: ScrollService) {}

  ngOnInit() {}
}
