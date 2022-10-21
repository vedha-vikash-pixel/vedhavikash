import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', './assets/files/r.pdf');
    link.setAttribute('download', `Vedha_Vikash_Resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
