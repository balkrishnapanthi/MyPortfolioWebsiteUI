import { Component } from '@angular/core';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resumeContent: string = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Your Name - Resume</title><style>body{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f9f9f9;color:#333;margin:0;padding:0;}@page{size:A4;margin:1cm;}section{display:flex;max-width:21cm;margin:20px auto;}.left-section{background-color:#34495e;color:#ecf0f1;padding:30px;box-shadow:0 0 20px rgba(0,0,0,0.1);border-radius:10px;flex:2;}.right-section{background-color:#ecf0f1;padding:30px;box-shadow:0 0 20px rgba(0,0,0,0.1);border-radius:10px;flex:3;}h1,h2,h3{margin-bottom:10px;}p{margin-bottom:20px;}.profile-image{text-align:center;margin-bottom:20px;}.profile-image img{width:150px;height:150px;border-radius:50%;border:4px solid #ecf0f1;box-shadow:0 0 15px rgba(0,0,0,0.2);}.contact-info{margin-bottom:30px;}ul{list-style:none;padding:0;margin:0;}ul li{margin-bottom:10px;}.left-section .education,.left-section .skills{margin-bottom:30px;color:#fff;}.left-section .education h3,.left-section .skills h3{margin-bottom:10px;}.left-section .education p,.left-section .skills p{margin:0;}.right-section .name-section{text-align:left;margin-bottom:20px;}.right-section .name-section h1{margin-bottom:5px;}.right-section .description{margin-top:20px;}.right-section .experience{margin-bottom:30px;}.right-section .experience h2{margin-bottom:10px;}.right-section .experience p{margin:0;}@media screen and (max-width:600px){section{flex-direction:column;}.left-section,.right-section{width:100%;margin-bottom:20px;}.profile-image img{width:100px;height:100px;}}</style></head><body><section><div class=\"left-section\"><div class=\"profile-image\"><img src=\"https://source.unsplash.com/random/150x150\" alt=\"Your Name\"></div><div class=\"contact-info\"><h2>Contact Information</h2><ul><li>Email: your.email@example.com</li><li>Phone: (123) 456-7890</li><li>LinkedIn: linkedin.com/in/yourname</li><li>GitHub: github.com/yourusername</li></ul></div><div class=\"education\"><h3>Education</h3><p>University Name - Bachelor's Degree in Computer Science</p><p>Graduation Year: 20XX</p></div><div class=\"skills\"><h3>Skills</h3><p>HTML, CSS, JavaScript, React, Node.js, etc.</p></div></div><div class=\"right-section\"><div class=\"name-section\"><h1>Your Name</h1><p>Web Developer</p></div><div class=\"description\"><p>A passionate web developer with a focus on creating clean and efficient code. Experienced in front-end technologies and dedicated to continuous learning.</p></div><div class=\"experience\"><h2>Work Experience</h2><h3>Company Name - Web Developer</h3><p>Employment Period: Month/Year - Month/Year</p><p>Description of responsibilities and achievements in this role.</p></div><div class=\"hobbies\"><h2>Hobbies</h2><p>Reading, coding, hiking, photography</p></div><div class=\"about-me\"><h2>About Me</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan gravida urna, sit amet ullamcorper libero commodo in.</p></div></div></section></body></html>";


  public convetToPDF() {
    var data = document.getElementById('resumeContent');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      var pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('balaResume.pdf'); // Generated PDF
    });
  }
}
