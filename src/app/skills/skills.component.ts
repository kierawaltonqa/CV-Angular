import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillsService.getSkills()
      .subscribe(skills => this.skills = skills)
  }
}
