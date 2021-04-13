import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../projects';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project!: Project;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.projectService.updateProject(this.project)
      .subscribe(() => this.goBack());
  }

  addSkill(skill: string): void {
    this.project.skills.push(skill);
    this.projectService.updateProject(this.project)
      .subscribe(skill => {
        this.project.skills.push(skill);
      });
  }
}
