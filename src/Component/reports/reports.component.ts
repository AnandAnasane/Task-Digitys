import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements AfterViewInit {
  @ViewChild('riskScoreOverTime') canvasRef!: ElementRef<HTMLCanvasElement>;
  darkMode = false;

  ngAfterViewInit(): void {
    this.darkMode = localStorage.getItem('darkMode') === 'true';
    const textColor = this.darkMode ? '#f1f1f1' : '#000';
    const gridColor = this.darkMode ? '#444' : '#ccc';

    new Chart(this.canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Risk Score Over Time',
          data: [70, 65, 75, 80, 70, 85],
          borderColor: '#42A5F5',
          fill: false
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
