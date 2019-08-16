import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;

    public selectedWorkRow : number = 0;
    public selectedExtraRow : number = 0;

    public workdDescriptions: string[];
    public ExtraDescriptions: string[];

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Company', 'From-To', 'City', 'Technology Used'],
          dataRows: [
            ['Royal Caribbean LTD', 'Dec-2018 / June-2019', 'Miramar,FL', 'Angular5+ - Python - Spring Boot - Java'],
            ['Oikos Financial', 'Feb-2018 / Nov-2018', 'Doral,FL', '.Net Core - Azure - Python - Ionic - Angular 5+'],
            ['Decoaries Corp', 'Apr-2015 / Dec-2017', 'Doral,FL', '.Net Core - Python - Ionic - Angular 2+']
          ]
      };

      this.workdDescriptions = [
          "Triage and fast analysis of incidents/problems, find ad-hoc solutions/workarounds. Using SQL to Create, Update, Insert and Delete data from the different Databases from the serves on the ship. Build a basic Machine Learning project where depending on the data it will predict the most efficient way to solve the issues. Develop different Apps to improve the performance of the company tasks using Angular +5, Spring Boot, SQL, Ionic, Powershell, Python.",
          "Using Python for Data Management. Pulling data from the server using MySQL, and Automating tests using Selenium (Python). Working on Angular 5 and Ionic with HTML, CSS, Typescript and JavaScript for the Front-End taking care of the basics of UI/UX. On the Back-End we worked on C# .Net Core to build the back-end and the Uni-Tests, Using SQL to manage the database.  We include in some of these projects we used Stripe for payment management and InContact for customer support.",
          "We develop all the Mobile Apps in Ionic and the Software and Websites on Angular 2, 4, the Front-End we wrote it on HTML, CSS, JavaScript and TypeScript. On the Back-End we worked for the company’s software with React. For the Mobile App, Django and for the Websites C# .Net Core and MySQL for the database. Create an automated system to test the applications on Python using Selenium Webdriver."
      ];

      this.tableData2 = {
        headerRow: [ 'Name', 'Where', 'When', 'About'],
        dataRows: [
          ['Code For Orlando', 'Winter Park,FL', 'Feb 2017', 'Developer Volunteer'],
          ['First Florida Pycon', 'Orlando,FL', 'October 2017', 'Speaker'],
          ['Orlando Code Camp', 'Orlando,FL', 'March 2018', 'Speaker'],
          ['Orlando Code Camp', 'Orlando,FL', 'March 2019', 'Speaker'],
          ['PyTennessee', 'Nashville,TN', 'February 2019', 'Speaker']
        ]
    };

    this.ExtraDescriptions = [
        "Presentation about scraping data from websites using Python. Using Pandas, CSV, Beautiful Soup and JSON libraries.",
        "Presentation about scraping data from websites using Python. Using Pandas, CSV, Beautiful Soup and JSON libraries.",
        "Presentation about how to use the library Beautiful Soup and Pandas along CSV and JSON to Scrape data from website to build data models.",
        "Presentation about how to use the library Beautiful Soup and Pandas  along CSV and JSON to Scrape data from website to build data models.",
        "Presentation about how to automate the browser using Selenium with Pandas, Beautiful Soup and CSV to scrape data from Instagram to generate strategies and data models."
    ];

    this.tableData3 = {
        headerRow: [ 'Name', 'Where / When', 'About'],
        dataRows: [
          ['Full Sail University', 'Winter Park,FL. Dec - 2017', 'Bachelor Software Development'],
          ['Introduccion to Machine Learning and AI with Azure', 'Online. July - 2019', 'edx Certification'],
          ['MTA: Programming in C#', 'Miami, FL. In Progress...', 'Certification']
        ]
    };
      
  }

  setClickedRow(index: number, dataType: number) {
        if(dataType == 1) {
            this.selectedWorkRow = index;
        }
        else if (dataType == 2) {
            this.selectedExtraRow = index;
        }
    }

}
