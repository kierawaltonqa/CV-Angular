import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Skill } from './skills';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let skills = [
      {
        id: 1, name: 'Programming Languages', types: [
          { type: 'Java', description: 'One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects.' },
          { type: 'HTML', description: 'HTML...' },
          { type: 'CSS', description: 'CSS...' },
          { type: 'JavaScript', description: 'JavaS...' },
          { type: 'TypeScript', description: 'TS...' },
          { type: 'Python', description: 'Python...' },
        ]
      },
      {
        id: 2, name: "IDE's", types: [
          { type: 'IntelliJ', description: 'Int....' },
          { type: 'Eclipse', description: 'Eclipse....' },
          { type: 'Visual Studio Code', description: 'VSC....' },
          { type: 'Spring Toolsuite', description: 'ST....' }
        ]
      },
      {
        id: 3, name: 'Devops Technologies', types: [
          { type: 'Jenkins', description: 'Jenkins is...' },
          { type: 'Git', description: 'Git is...' },
          { type: 'Selenium', description: 'Sel is...' },
          { type: 'Node', description: 'Node is...' }
        ]
      },
      {
        id: 4, name: 'Database Technologies', types: [
          { type: 'MySQL', description: 'MySQL is...' },
          { type: 'MongoDb', description: 'MongoDb is...' },
          { type: 'H2', description: 'H2 is...' },
          { type: 'Postman', description: 'Postman is...' }
        ]
      },
      {
        id: 5, name: 'Cloud Platforms', types: [
          { type: 'AWS', description: 'AWS is .....' },
          { type: 'GCP', description: 'GCP is .....' }
        ]
      },
      {
        id: 6, name: 'Operating Systems', types: [
          { type: 'Windows', description: 'Windows is...' }
        ]
      },
      {
        id: 7, name: 'JavaScript Full Stack Frameworks', types: [
          { type: 'MERN', description: 'MERN is mongoDb, express, react and node' },
          { type: 'MEAN', description: 'MEAN is mongoDb, express, angular and node' }
        ]
      },
      {
        id: 8, name: 'Other', types: [
          { type: 'Agile Scrum', description: 'Agile is...' },
          { type: 'JUnit', description: 'JUnit is...' },
          { type: 'Maven', description: 'Maven is...' },
          { type: 'SonarQube', description: 'SonarQube is...' },
          { type: 'Express', description: 'Express is...' },
          { type: 'React', description: 'React is...' },
        ]
      }
    ];
    let projects = [
      {
        id: 1, name: 'IMS System', desc: 'By connecting to GCP via a JDBC connection to host a MySQL database, this project created a system with CRUD (create, read, update and delete) functionality for manipulation of data on the cloud. This project was developed and implemented using Maven as a build tool and Java source code to run and execute the processes, and JUnit and Mockito were used to test the CRUD functionality. Git was used throughout the project for the continuous integration of code, whereby the feature-branch model on GitHub was utilised to implement this process. Furthermore, the project utilised agile processes so as to allow for a flexible and adaptive workflow. The resulting product of this project was a working inventory management system which tracks and manipulates customer information, order details and item data - all of which users can interact with via a command line.',
        skills: ['Java', 'MySQL', 'Maven', 'JUnit', 'Mockito', 'Eclipse', 'GCP', 'Eclipse']
      },
      {
        id: 2, name: 'To-Do List', desc: 'Using a three tier architecture, I created a full stack OOP-based To Do List web application with basic CRUD functionality. The front end for this application was built using HTML, CSS and Javascript. The back end, built using Spring Boot and written in Java, constructs an API, which is used to act as a messenger between the layers; it allows for the interaction, communication and access of data between/with external software components. The data layer is a locally hosted relational database written in MySQL. The build for this project was managed by Maven, and source code was continuously integrated through GitHub using the feature-branch model. Testing for the back end was done using JUnit and Mockito; unit tests were implemented for each class, and system integration tests were used to check the interactions between integrated units of code. Further, browser-based automation tests for the front end were conducted using Selenium. Sonarqube was used for the static analysis of the code.',
        skills: ['JavaScript', 'HTML', 'CSS', 'MySQL', 'JUnit', 'Mockito', 'Selenium', 'Maven', 'SpringBoot', 'VSC', 'SonarQube']
      },
      {
        id: 3, name: 'QA Cinemas', desc: 'Working in a group, the MERN stack was used to develop a full stack web application in the form of a cinema website. I was scrum master for this project, meaning I was in charge of the daily stand-ups and held responsibility for the successful completion of weekly sprints, as well as the adherence to agile principles and values by the team throughout the project. Following agile processes allowed for our team to maintain a flexible and productive workflow. I worked predominantly on front end development; utilising React to create an attractive and functional interactive user interface for the website. One example of this is my implementation of a discussion board feature on the website - this page has full CRUD functionality and is visually attractive. I developed the page using axios data requests to interact with an API created in Express and retrieve data stored in MongoDb. Back end testing for this project was done using Mocha and Chai, and the front end was tested using Snapshot tests with Jest. As well as functionality, emphasis was placed on design and styling throughout the project, and the final product was a fully functioning, informative and aesthetically appealing website.',
        skills: ['JavaScript', 'React', 'Express', 'Node', 'MongoDb', 'Mocha', 'Chai', 'Jest', 'VSC']
      }
    ]

    return { skills, projects };
  }




  genId(skills: Skill[]): number {
    return skills.length > 0 ? Math.max(...skills.map(skill => skill.id)) + 1 : 11;
  }
}
