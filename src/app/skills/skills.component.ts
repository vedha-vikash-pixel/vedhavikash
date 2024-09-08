import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  startdelay:number = 1.8; 

  skills  = [{ skill: 'HTML', stack: 'frontend', path: './assets/images/html.png', delay:''},
  { skill: 'CSS', stack: 'FrontEnd', path: './assets/images/css.png', delay:''},
  { skill: 'Javascript', stack: 'FrontEnd', path: './assets/images/js.png', delay:''},
  { skill: 'Angular', stack: 'FrontEnd', path: './assets/images/angular.png', delay:''},
  { skill: 'Jquery', stack: 'FrontEnd', path: './assets/images/jquery.png', delay:''},
  { skill: 'TypeScript', stack: 'FrontEnd', path: './assets/images/typescript.png', delay:''},
  { skill: 'Java', stack: 'BackEnd', path: './assets/images/java.png', delay:''},
  { skill: 'Spring Boot', stack: 'BackEnd', path: './assets/images/spring-boot.png', delay:''},  
  { skill: 'Python', stack: 'BackEnd', path: './assets/images/python.png', delay:''},
  { skill: 'SQL', stack: 'Database', path: './assets/images/postgresql.png', delay:''},
  { skill: 'Git', stack: 'Cache', path: './assets/images/git.png', delay:''},
  { skill: 'NOSQL', stack: 'Database', path: './assets/images/mongodb.png', delay:''},    
  { skill: 'Docker', stack: 'Deployment', path: './assets/images/docker.png', delay:''},
  { skill: 'Kubernetes', stack: 'Deployment', path: './assets/images/kubernetes.png', delay:''},
  { skill: 'Jenkins', stack: 'CICD', path: './assets/images/jenkins.png', delay:''}
  ];


  constructor() { }

  ngOnInit(): void {
    for(let i =0;i<this.skills.length;i++){
      this.skills[i].delay = this.startdelay + 's'; 
      this.startdelay += 0.1;
    }
  }
  
}
