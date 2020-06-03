import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() item;
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.open = !this.open;
  }

}
