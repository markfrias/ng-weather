import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items: any[] = [1, 2, 3]
  @Input() drawer!: any;
  @ViewChild('toggleButton') button!: ElementRef<any>; 

}
