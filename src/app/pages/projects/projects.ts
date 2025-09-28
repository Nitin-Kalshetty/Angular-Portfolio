import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

   projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular and Bootstrap.',
      image: 'assets/projects/portfolio.png',
      link: 'https://yourportfolio.com'
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack e-commerce application with user authentication and payment integration.',
      image: 'assets/projects/ecommerce.png',
      link: 'https://yourecommerceapp.com'
    },
    // Add more projects here
  ];

}
