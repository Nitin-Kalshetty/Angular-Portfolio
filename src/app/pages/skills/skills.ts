import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {

  skills = [
    { name: 'Angular', iconClass: 'fab fa-angular' },
    { name: 'TypeScript', iconClass: 'fab fa-js' },
    { name: 'HTML5', iconClass: 'fab fa-html5' },
    { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
    { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
    { name: 'Git', iconClass: 'fab fa-git-alt' },
    // add more skills as needed
  ];

}
