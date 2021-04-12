import { Component, OnInit } from '@angular/core';
import { Skill } from '../skills';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillsService } from '../skills.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {

  skill!: Skill;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skillsService.getSkill(id)
      .subscribe(skill => this.skill = skill);
    // this.skillsService.getSkill(id).pipe(
    //   map(res => res.types),
    //   map(types => types.map(info => ({ type: info.type, description: info.description }))),
    // ).subscribe(skill => this.skill = skill);
  }

  goBack(): void {
    this.location.back();
  }

}
