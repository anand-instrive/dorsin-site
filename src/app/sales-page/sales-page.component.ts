import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.scss']
})
export class SalesPageComponent implements OnInit {

  fixedHeader: number =0; 
  show: boolean = true;
  // myPrimaryColor!: string;
  menuShow: boolean = false;

  iframeShow: boolean = true;

  constructor() { 
    this.myTheam('#40E0D0');
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['event'])
  track() {
      // console.log("Scroll Event", window.pageYOffset );
      this.fixedHeader = window.pageYOffset;
      // console.log("after", this.fixedHeader );
  }

  iconShow() {
    this.show = !this.show;
    console.log("this show work")
  }

  
  myTheam(getColor:string) {
    console.log("getcolor",getColor);
    document.documentElement.style.setProperty('--myCustom-color', getColor);
  }
  menuHideAndShow() {
    this.menuShow = !this.menuShow;
  }
  iframeShowHide() {
    this.iframeShow = !this.iframeShow;
    console.log("ifrmae ",this.iframeShow);
  }
  
}
