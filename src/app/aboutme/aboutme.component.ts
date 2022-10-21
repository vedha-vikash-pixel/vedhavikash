import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {  

  public visiblity:string = 'none';
  constructor() { }

  ngOnInit(): void {    
  }

}
