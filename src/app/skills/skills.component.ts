import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {skill:string , stack:string,path:string}[] = [{skill:'HTML',stack:'frontend',path:'./assets/images/html.png'},
          {skill:'CSS',stack:'FrontEnd',path:'./assets/images/css.png'},
          {skill:'Bootstrap',stack:'FrontEnd',path:'./assets/images/bootstrap.png'},
          {skill:'Javascript',stack:'FrontEnd',path:'./assets/images/js.png'},
          {skill:'Angular',stack:'FrontEnd',path:'./assets/images/angular.png'},
          {skill:'Jquery',stack:'FrontEnd',path:'./assets/images/jquery.png'},          
          {skill:'TypeScript',stack:'FrontEnd',path:'./assets/images/typescript.png'},
          {skill:'Java',stack:'BackEnd',path:'./assets/images/java.png'},
          {skill:'Spring Boot',stack:'BackEnd',path:'./assets/images/spring-boot.png'},
          {skill:'NodeJS',stack:'BackEnd',path:'./assets/images/nodejs.png'},
          {skill:'Python',stack:'BackEnd',path:'./assets/images/python.png'},
          {skill:'SQL',stack:'Database',path:'./assets/images/sqlserver.png'},
          {skill:'NOSQL',stack:'Database',path:'./assets/images/mongodb.png'},
          {skill:'Docker',stack:'Deployment',path:'./assets/images/docker.png'},
          {skill:'Kubernetes',stack:'Deployment',path:'./assets/images/kubernetes.png'}];


  constructor() { }

  ngOnInit(): void {
    
  }

}
