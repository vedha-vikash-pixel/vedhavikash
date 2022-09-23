import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.css']
})
export class RoadComponent implements OnInit {

  isLinear = false;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  public onIntersectionroad({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'animate__fadeIn' : '');    
}
}
