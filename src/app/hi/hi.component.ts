import { Component, OnInit } from '@angular/core';
import { fadein } from '../animations';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css'],
  animations: [fadein]
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', './assets/files/r.pdf');
    link.setAttribute('download', `Vedha_Vikash_Resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
