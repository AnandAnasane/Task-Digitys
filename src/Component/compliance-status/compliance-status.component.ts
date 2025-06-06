import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-compliance-status',
  standalone: true,
  templateUrl: './compliance-status.component.html',
  styleUrls: ['./compliance-status.component.css'],
})
export class ComplianceStatusComponent implements AfterViewInit {
  @ViewChild('complianceStatusCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  darkMode = false;

  ngAfterViewInit(): void {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    const textColor = this.darkMode ? '#f1f1f1' : '#000';
    const gridColor = this.darkMode ? '#444' : '#ccc';

    new Chart(this.canvasRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['ISO 27001', 'SOC 2', 'GDPR'],
        datasets: [{
          label: 'Compliance Percentage',
          data: [80, 65, 40],
          backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384']
        }]
      },
      options: {
        scales: {
          x: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          },
          y: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          }
        },
        plugins: {
          legend: {
            labels: { color: textColor }
          }
        }
      }
    });
  }
}
