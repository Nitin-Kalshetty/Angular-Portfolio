import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  name:string = 'NITIN';
  fullName:string = 'Nitin Kalshetty';
  role:string = 'Full Stack Developer';
  typedRole:string = '';
  private isDeleting = false;
  private index = 0;
  private typingSpeed = 150; 

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (!this.isDeleting) {
      this.typedRole = this.role.substring(0, this.index + 1);
      this.index++;

      if (this.index === this.role.length) {
        this.isDeleting = true;
        setTimeout(() => this.typeWriter(), 1000); 
        return;
      }
    } else {
      this.typedRole = this.role.substring(0, this.index - 1);
      this.index--;

      if (this.index === 0) {
        this.isDeleting = false;
        setTimeout(() => this.typeWriter(), 500); 
        return;
      }
    }

    setTimeout(() => this.typeWriter(), this.typingSpeed);
  }
}
