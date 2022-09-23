import { Component, OnInit ,Renderer2} from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private clipboard:Clipboard,private _snack:MatSnackBar,private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  copymail(){
    this.clipboard.copy('vikashvedha@gmail.com');
    this._snack.open('MAIL COPIED TO CLIPBOARD (OPENING MAIL CLIENT IN YOUR DEVICE)', 'X', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'green-snackbar'
    });
  }

  public onIntersectioncontactimg({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'animate__bounceInLeft' : '');    
}
public onIntersectioncontact({ target, visible }: { target: Element; visible: boolean }): void {
  this.renderer.addClass(target, visible ? 'animate__bounceInRight' : '');    
}
}
