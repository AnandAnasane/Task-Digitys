import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  darkMode = false;
  sidebarVisible = false;

  ngAfterViewInit(): void {
    this.loadDarkModePreference();
    this.createCharts();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode.toString());
    this.createCharts();
  }

  loadDarkModePreference() {
    const stored = localStorage.getItem('darkMode');
    this.darkMode = stored === 'true';
  }

  createCharts() {
    const textColor = this.darkMode ? '#f1f1f1' : '#000';
    const gridColor = this.darkMode ? '#444' : '#ccc';

    const riskOverviewCtx = document.getElementById('riskOverview') as HTMLCanvasElement;
    const complianceStatusCtx = document.getElementById('complianceStatus') as HTMLCanvasElement;
    const riskScoreOverTimeCtx = document.getElementById('riskScoreOverTime') as HTMLCanvasElement;

    if (!riskOverviewCtx || !complianceStatusCtx || !riskScoreOverTimeCtx) {
      console.warn("Canvas elements not found");
      return;
    }

    new Chart(riskOverviewCtx, {
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

    new Chart(complianceStatusCtx, {
      type: 'bar',
      data: {
        labels: ['ISO 27001', 'SOC 2', 'GDPR'],
        datasets: [{
          label: 'Compliance Percentage',
          data: [90, 65, 40],
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

    new Chart(riskScoreOverTimeCtx, {
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
