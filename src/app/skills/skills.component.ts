import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { LanguagesService } from '../languages.service';
import { Languages } from '../languages';
import { IDEs, DevOpsTech, databaseTech, cloudPlatformsAndOS, fullStack, other } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // skills: Skill[] = [];
  languages: Languages[] = [];
  IDEs: IDEs[] = [];
  devOps: DevOpsTech[] = [];
  db: databaseTech[] = [];
  cloudOS: cloudPlatformsAndOS[] = [];
  fullStack: fullStack[] = [];
  other: other[] = [];

  constructor(private languagesService: LanguagesService,
    private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getLanguages();
    this.getIDEs();
    this.getDevOps();
    this.getDbs();
    this.getCloudOS();
    this.getFullStack();
    this.getOther();
    this.showLanguages();
    this.showIDEs();
    this.showDevOps();
    this.showDBs();
    this.showCloudOS();
    this.showFullStack();
    this.showOther();
  }

  getLanguages(): void {
    this.languagesService.getLanguages()
      .subscribe(languages => this.languages = languages);
    console.log("hi")
  }
  getIDEs(): void {
    this.skillsService.getIDEs()
      .subscribe(IDEs => this.IDEs = IDEs);
  }
  getDevOps(): void {
    this.skillsService.getDevOps()
      .subscribe(devOps => this.devOps = devOps);
  }
  getDbs(): void {
    this.skillsService.getDbs()
      .subscribe(db => this.db = db);
  }
  getCloudOS(): void {
    this.skillsService.getCloudOS()
      .subscribe(cloudOS => this.cloudOS = cloudOS);
  }
  getFullStack(): void {
    this.skillsService.getFullStack()
      .subscribe(fullStack => this.fullStack = fullStack);
  }
  getOther(): void {
    this.skillsService.getOther()
      .subscribe(other => this.other = other);
  }

  showLanguages() {
    let x = document.getElementById("languages");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showIDEs() {
    let x = document.getElementById("IDEs");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showDevOps() {
    let x = document.getElementById("devOps");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showDBs() {
    let x = document.getElementById("dbs");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showCloudOS() {
    let x = document.getElementById("COS");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showFullStack() {
    let x = document.getElementById("fullStack");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
  showOther() {
    let x = document.getElementById("other");
    if (x?.style.display === "none") {
      x.style.display = "block";
    }
    else {
      x!.style.display = "none";
    }
  }
}
