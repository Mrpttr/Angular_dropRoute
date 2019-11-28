import { Component } from '@angular/core';
import { formatDate } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //mydate = Date.now();
  today = new Date();
  jstoday = '';
  Clock = Date.now();

  constructor(){
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')
  }

  public ngOnInit(){
    setInterval(()=>{
      this.Clock = Date.now();
    },1000)
  }
}
