import { Component, OnInit } from '@angular/core';
import { IDEs, DevOpsTech, databaseTech, cloudPlatformsAndOS, fullStack, other } from '../skills';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillsService } from '../skills.service';
import { map } from 'rxjs/operators';
import { Languages } from '../languages';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-skills-detail',
  templateUrl: './skills-detail.component.html',
  styleUrls: ['./skills-detail.component.css']
})
export class SkillsDetailComponent implements OnInit {

  language!: Languages;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private skillsService: SkillsService,
    private languagesService: LanguagesService
  ) { }

  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.languagesService.getLanguage(id)
      .subscribe(language => this.language = language);
  }

  goBack(): void {
    this.location.back();
  }

}
