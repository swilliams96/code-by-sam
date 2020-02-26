import { Component, OnInit, Input } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() aboutSectionId = 'about';
  @Input() projectsSectionId = 'projects';
  isCollapsed = true;

  constructor(public scrollService: ScrollService, private modalService: NgbModal) {}

  ngOnInit() { }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  sendMessage() {
    // send an email to me and upload something to firestore to show on the dashboard
  }
}
