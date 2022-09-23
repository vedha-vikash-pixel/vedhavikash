import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: { skill: string, stack: string, path: string, delay: string }[] = [{ skill: 'HTML', stack: 'frontend', path: './assets/images/html.png', delay: '0.2s' },
  { skill: 'CSS', stack: 'FrontEnd', path: './assets/images/css.png', delay: '0.4s' },
  { skill: 'Bootstrap', stack: 'FrontEnd', path: './assets/images/bootstrap.png', delay: '0.6s' },
  { skill: 'Javascript', stack: 'FrontEnd', path: './assets/images/js.png', delay: '0.8s' },
  { skill: 'Angular', stack: 'FrontEnd', path: './assets/images/angular.png', delay: '1.0s' },
  { skill: 'Jquery', stack: 'FrontEnd', path: './assets/images/jquery.png', delay: '1.2s' },
  { skill: 'TypeScript', stack: 'FrontEnd', path: './assets/images/typescript.png', delay: '1.4s' },
  { skill: 'Java', stack: 'BackEnd', path: './assets/images/java.png', delay: '1.6s' },
  { skill: 'Spring Boot', stack: 'BackEnd', path: './assets/images/spring-boot.png', delay: '1.8s' },
  { skill: 'NodeJS', stack: 'BackEnd', path: './assets/images/nodejs.png', delay: '2.0s' },
  { skill: 'Python', stack: 'BackEnd', path: './assets/images/python.png', delay: '2.2s' },
  { skill: 'SQL', stack: 'Database', path: './assets/images/sqlserver.png', delay: '2.4s' },
  { skill: 'NOSQL', stack: 'Database', path: './assets/images/mongodb.png', delay: '2.6s' },
  { skill: 'Docker', stack: 'Deployment', path: './assets/images/docker.png', delay: '2.8s' },
  { skill: 'Kubernetes', stack: 'Deployment', path: './assets/images/kubernetes.png', delay: '3.0s' }];


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  public onIntersectionskill({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'animate__flipInX' : '');
  }
  public onIntersectionskillimg({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'animate__bounceInRight' : '');
  }

}
