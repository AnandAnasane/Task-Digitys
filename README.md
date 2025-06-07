📘 GRC Dashboard – README / Design Brief

**Project Title**: GRC Dashboard – Governance, Risk, and Compliance Interface
**Frameworks Used**: Angular 18, Bootstrap 5.3.3, Chart.js, FontAwesome
**Purpose**: To provide an interactive, responsive, and user-friendly dashboard for monitoring and visualizing risk and compliance metrics in an enterprise environment.

🔧 Features

* **Responsive Layout**: Adapts across devices using Bootstrap grid and offcanvas navigation.
* **Dark Mode Support**: Theme toggler with `localStorage` support to persist user preferences.
* **Modular Codebase**: Each component (navigation, dashboard, charts) is structured separately for scalability.
* **Interactive Charts**: Real-time visualization using Chart.js for doughnut, bar, and line charts.
* **Accessibility**: Uses semantic HTML, icons, and ARIA-compliant components for inclusive design.

🧩 Component Overview

| Component            | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `DashboardComponent` | Main panel for visual data (charts) and user insights |
| `SidebarComponent`   | Responsive navigation for different GRC sections      |
| `DarkModeService`    | Manages theme preference and updates DOM dynamically  |


🚀 Setup Instructions

1. Install dependencies:

   bash
   npm install
   

2. Run development server:

   bash
   ng serve
   

3. Open in browser at:
   [http://localhost:4200](http://localhost:4200)


📊 Charts Summary

Doughnut Chart – Displays current risk vs remaining score.
Bar Chart – Compliance percentages for ISO, SOC 2, GDPR.
Line Chart – Shows risk trends over recent months.

All charts are styled based on the active theme using dynamic color bindings.
