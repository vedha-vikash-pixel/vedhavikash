import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {skill:string , stack:string}[] = [{skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'backed'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},
          {skill:'asdasdad',stack:'frontend'},];


  constructor() { }

  ngOnInit(): void {
    
  }

}
