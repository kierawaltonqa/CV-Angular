import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let languages = [
      { id: 1, type: 'Java', description: 'One of the most widely used programming languages, Java is used as the server-side language for most back-end development projects.' },
      { id: 2, type: 'HTML', description: 'HTML...' },
      { id: 3, type: 'CSS', description: 'CSS...' },
      { id: 4, type: 'JavaScript', description: 'JavaS...' },
      { id: 5, type: 'TypeScript', description: 'TS...' },
      { id: 6, type: 'Python', description: 'Python...' },
    ]

    let IDEs = [
      { id: 1, type: "IntelliJ", description: 'Int....' },
      { id: 2, type: 'Eclipse', description: 'Eclipse....' },
      { id: 3, type: 'Visual Studio Code', description: 'VSC....' },
      { id: 4, type: 'Spring Toolsuite', description: 'ST....' }
    ]

    let DevOpsTech = [
      { id: 1, type: 'Jenkins', description: 'Jenkins is...' },
      { id: 2, type: 'Git', description: 'Git is...' },
      { id: 3, type: 'Selenium', description: 'Sel is...' },
      { id: 4, type: 'Node', description: 'Node is...' }
    ]

    let databaseTech = [
      { id: 1, type: 'MySQL', description: 'MySQL is...' },
      { id: 2, type: 'MongoDb', description: 'MongoDb is...' },
      { id: 3, type: 'H2', description: 'H2 is...' },
      { id: 4, type: 'Postman', description: 'Postman is...' }
    ]

    let cloudPlatformsAndOS = [
      { id: 1, type: 'AWS', description: 'AWS is .....' },
      { id: 2, type: 'GCP', description: 'GCP is .....' },
      { id: 3, type: 'Windows', description: 'Windows is...' }
    ]

    let fullStack = [
      { id: 1, type: 'MERN', description: 'MERN is mongoDb, express, react and node' },
      { id: 2, type: 'MEAN', description: 'MEAN is mongoDb, express, angular and node' }

    ]

    let other = [
      { id: 1, type: 'Agile Scrum', description: 'Agile is...' },
      { id: 2, type: 'JUnit', description: 'JUnit is...' },
      { id: 3, type: 'Maven', description: 'Maven is...' },
      { id: 4, type: 'SonarQube', description: 'SonarQube is...' },
      { id: 5, type: 'Express', description: 'Express is...' },
      { id: 6, type: 'React', description: 'React is...' },
    ]

    let projects = [
      {
        id: 1, name: 'IMS System', desc: 'By connecting to GCP via a JDBC connection to host a MySQL database, this project created a system with CRUD (create, read, update and delete) functionality for manipulation of data on the cloud. This project was developed and implemented using Maven as a build tool and Java source code to run and execute the processes, and JUnit and Mockito were used to test the CRUD functionality. Git was used throughout the project for the continuous integration of code, whereby the feature-branch model on GitHub was utilised to implement this process. Furthermore, the project utilised agile processes so as to allow for a flexible and adaptive workflow. The resulting product of this project was a working inventory management system which tracks and manipulates customer information, order details and item data - all of which users can interact with via a command line.',
        skills: ['Languages: Java', 'Database Technologies: MySQL, GCP', 'Build Tool: Maven', 'Testing: JUnit, Mockito', 'IDE: Eclipse'],
        github: 'https://github.com/kierawaltonqa/ims-kiera'
      },
      {
        id: 2, name: 'To-Do List', desc: 'Using a three tier architecture, I created a full stack OOP-based To Do List web application with basic CRUD functionality. The front end for this application was built using HTML, CSS and Javascript. The back end, built using Spring Boot and written in Java, constructs an API, which is used to act as a messenger between the layers; it allows for the interaction, communication and access of data between/with external software components. The data layer is a locally hosted relational database written in MySQL. The build for this project was managed by Maven, and source code was continuously integrated through GitHub using the feature-branch model. Testing for the back end was done using JUnit and Mockito; unit tests were implemented for each class, and system integration tests were used to check the interactions between integrated units of code. Further, browser-based automation tests for the front end were conducted using Selenium. Sonarqube was used for the static analysis of the code.',
        skills: ['Languages: JavaScript, HTML, CSS', 'Database Technologies: MySQL, Postman', 'Testing: JUnit, Mockito, Selenium', 'Build Tool: Maven', 'IDEs: SpringBoot, VSC', 'Code Analysis: SonarQube'],
        github: 'https://github.com/kierawaltonqa/ToDoListProject'
      },
      {
        id: 3, name: 'QA Cinemas', desc: 'Working in a group, the MERN stack was used to develop a full stack web application in the form of a cinema website. I was scrum master for this project, meaning I was in charge of the daily stand-ups and held responsibility for the successful completion of weekly sprints, as well as the adherence to agile principles and values by the team throughout the project. Following agile processes allowed for our team to maintain a flexible and productive workflow. I worked predominantly on front end development; utilising React to create an attractive and functional interactive user interface for the website. One example of this is my implementation of a discussion board feature on the website - this page has full CRUD functionality and is visually attractive. I developed the page using axios data requests to interact with an API created in Express and retrieve data stored in MongoDb. Back end testing for this project was done using Mocha and Chai, and the front end was tested using Snapshot tests with Jest. As well as functionality, emphasis was placed on design and styling throughout the project, and the final product was a fully functioning, informative and aesthetically appealing website.',
        skills: ['Languages: JavaScript', 'Database Technologies: MongoDb, Postman', 'Frameworks/Environments: React, Express, Node', 'Testing: Mocha, Chai, Jest', 'IDE: VSC'],
        github: 'https://github.com/kierawaltonqa/QACinemasProject'
      }
    ]

    return { languages, IDEs, DevOpsTech, databaseTech, cloudPlatformsAndOS, fullStack, other, projects };
  }




  // genId(skills: Skill[]): number {
  //   return skills.length > 0 ? Math.max(...skills.map(skill => skill.id)) + 1 : 11;
  // }
}
