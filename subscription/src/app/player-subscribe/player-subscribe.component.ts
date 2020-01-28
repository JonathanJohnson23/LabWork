import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-subscribe',
  templateUrl: './player-subscribe.component.html',
  styleUrls: ['./player-subscribe.component.css']
})
export class PlayerSubscribeComponent implements OnInit {
  players = ["Le idk", "Lion idc", "Manny PacWHO"]
  constructor() { }

  ngOnInit() {
  }

}
