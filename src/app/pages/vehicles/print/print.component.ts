import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  @ViewChild('tableToPrint') tableToPrint!: ElementRef;

  printData!: any;
  year!: string;

  ngOnInit(): void {
    const printData = localStorage.getItem('print');
    if (printData) {
      this.printData = localStorage.getItem('print');
      this.printData = JSON.parse(this.printData);
      this.year = this.printData?.year;
      console.log(this.year)
      console.log(this.printData);
    }
  }

  downloadPDF() {
    html2canvas(this.tableToPrint.nativeElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`VD_${this.printData?.car_name}`);
    });
  }
}
