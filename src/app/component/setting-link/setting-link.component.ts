import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-link',
  templateUrl: './setting-link.component.html',
  styleUrls: ['./setting-link.component.css']
})
export class SettingLinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle:boolean = false;

  closeSettings(){
    this.toggle = false;
  }
  onOpenSettings(){
    this.toggle = true
  }

}
