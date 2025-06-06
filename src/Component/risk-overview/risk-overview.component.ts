import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-risk-overview',
  standalone: true,
  templateUrl: './risk-overview.component.html',
  styleUrls: ['./risk-overview.component.css'],
})
export class RiskOverviewComponent implements AfterViewInit {
  @ViewChild('riskOverview') riskCanvasRef!: ElementRef<HTMLCanvasElement>;

  darkMode = false;

  ngAfterViewInit(): void {
    const textColor = this.darkMode ? '#f1f1f1' : '#000';

    new Chart(this.riskCanvasRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Risk Score', 'Remaining'],
        datasets: [{
          data: [75, 25],
          backgroundColor: ['#36A2EB', '#FF6384']
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: { color: textColor } 
          }
        }
      }
    });
  }
}
