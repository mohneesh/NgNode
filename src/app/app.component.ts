import { Component, OnInit } from '@angular/core';
import { NodeTestService } from './services/node-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hey! I am Angular';
  
  constructor(private nodeTestService:NodeTestService){}

  fromNode = '';

  ngOnInit() {
    this.nodeTestService.getNodeTest().subscribe(responseNode => this.fromNode = responseNode);
    //console.log(this.fromNode);
  }

}
