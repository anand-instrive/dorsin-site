import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theam-change',
  templateUrl: './theam-change.component.html',
  styleUrls: ['./theam-change.component.scss']
})
export class TheamChangeComponent implements OnInit {

  primaryColor!: string;
  secondaryColor!: string;

  thired: string ='blue';
  constructor() { 
    this.changeTheme('red', 'yellow'); // Set default theme
    this.myTheam(this.thired);
  }

  ngOnInit(): void {
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);

    console.log('color-1:',primary);
    console.log('color-2:',secondary);
  }

  myTheam(color:string){
    console.log("myTheam",color);
    document.documentElement.style.setProperty('--abc-color', color);
    // this.thired = color;
    // console.log(this.thired)
  }

}
