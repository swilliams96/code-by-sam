import { Component } from '@angular/core';

declare global {
  interface Window {
    File?: File;
    FileList?: FileList;
    FileReader?: FileReader;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
