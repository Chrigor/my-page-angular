import { Component, OnInit } from '@angular/core';
// import FileSaver from 'file-saver';
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    console.log(event);
    FileSaver.saveAs("../assets/curriculo.pdf", "resume_chrigor.pdf");
  }

}
