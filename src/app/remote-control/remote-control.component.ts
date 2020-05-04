import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-control',
  templateUrl: './remote-control.component.html',
  styleUrls: ['./remote-control.component.scss']
})
export class RemoteControlComponent implements OnInit {
  leftPressed = false;
  rightPressed = false;
  constructor() { }

  ngOnInit() {
  }

  touchLeft() {
    this.leftPressed = true;
    console.log(this.leftPressed)
  }
  untouchLeft() {
    this.leftPressed = false;
  }
  touchRight() {
    this.rightPressed = true;
  }
  untouchRight() {
    this.rightPressed = false;
  }

}
