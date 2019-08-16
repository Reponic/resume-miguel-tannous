import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public aboutMe: string;

  constructor() { }

  ngOnInit() {
    this.aboutMe = "Software Engineer with strong knowledge in Object-oriented design, test driven development and UI/UX Front-End development. High interest in games and working with Hardware. Quick learner and early adopter of new technologies; excellent time management and multitasking skills with a very analytical mindset that translates into exceptional problem solving and troubleshooting abilities. Finally, a collaborative person in the work environment, successful working on a team or individual setting, as well as a very adaptive individual in constantly changing environments.";
  }

}
