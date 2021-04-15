import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { IDEs } from '../skills';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.css']
})
export class IDEComponent implements OnInit {

  IDE!: IDEs;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getIDE();
  }

  getIDE(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skillsService.getIDE(id)
      .subscribe(IDE => this.IDE = IDE);
  }

  goBack(): void {
    this.location.back();
  }
}
