import { Component, OnInit } from '@angular/core';
import { Gamer } from '../gamer';
import { GamerService } from '../gamer.service';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {

  gamers: Gamer[];
  inputValue = '';
  constructor(private gamerService : GamerService) { }

  onInput(event: KeyboardEvent){
    this.inputValue = (<HTMLInputElement>event.target).value;
    this.gamerService.getGamersByName(this.inputValue).subscribe((data: Gamer[]) => {
      this.gamers = data;
    })
  }

  ngOnInit(): void {
    this.gamerService.getGamersByPage().subscribe( data => {
      this.gamers = data;
    })
  }
  showDebug(obj: any){
    console.log(obj)
  }

  listBackward(){
    console.log(this.gamerService)
    if(this.gamerService.start === 0) return
    this.gamerService.start--;
    this.gamerService.getGamersByPage().subscribe (data => {
      this.gamers = data;
    })
  }
  listForward(){
    console.log(this.gamerService)
    this.gamerService.start++;
    this.gamerService.getGamersByPage().subscribe(data => {
      this.gamers = data;
    })
  }
}
