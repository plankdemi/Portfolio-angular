import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isHidden = "hidden";

  showModal(){
    if(this.isHidden ==="block") this.isHidden ="hidden";
    else this.isHidden = "block";
   
  }






}
