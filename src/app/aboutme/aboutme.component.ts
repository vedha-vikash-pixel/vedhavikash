import { Component, OnInit ,Renderer2} from '@angular/core';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {  

  public visiblity:string = 'none';
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {    
  }

  public onIntersectionpic({ target, visible }: { target: Element; visible: boolean }): void {    
    this.visiblity = ''; 
    console.log(this.visiblity);
    this.renderer.addClass(target, visible ? 'animate__bounceInLeft' : '');
          
}
public onIntersectiontext({ target, visible }: { target: Element; visible: boolean }): void {
  this.renderer.addClass(target, visible ? 'animate__fadeIn' : '');      
}
}
