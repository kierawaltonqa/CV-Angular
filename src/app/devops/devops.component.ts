import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { DevOpsTech } from '../skills';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {

  devOps!: DevOpsTech;

  constructor(
    private skillsService: SkillsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDevOp();
  }

  getDevOp(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.skillsService.getDevOp(id)
      .subscribe(devOps => this.devOps = devOps)
  }

  goBack(): void {
    this.location.back();
  }

}
