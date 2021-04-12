import { Component, OnInit } from '@angular/core';
import { Project } from '../projects';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects)
  }

  addProject(name: string, desc: string): void {
    name = name.trim();
    desc = desc.trim();
    if (!name) { return; }
    if (!desc) { return; }
    this.projectService.addProject({ name, desc } as Project)
      .subscribe(project => {
        this.projects.push(project);
      });
  }

  deleteProject(project: Project): void {
    this.projects = this.projects.filter(p => p !== project);
    this.projectService.deleteProject(project.id).subscribe();
  }

}
