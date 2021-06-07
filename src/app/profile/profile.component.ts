import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: string = "It is my drive for answers and love for problem solving which have led me to pursue a career in the technical industry. Throughout my three years spent studying Maths and Philosophy at university, I was able to push the limits of my own understanding, question the unknown, and take creative approaches to provide the best solutions to various problems. The interdisciplinary nature of this degree has enabled me to possess a set of transferrable critical thinking skills and develop an analytic and innovative mindset – it is these skills which provide a foundation for my technical competency. Upon taking up the challenge of learning Python after graduating, I realised my ability and passion for IT; the skills I possess - my desire for understanding and naturally curious mindset, my problem-solving skills, my analytical ability – provide me with an attuned way of tackling technical problems and implementing logic into systems and software to achieve results. "

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }

}
