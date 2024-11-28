import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
// Metrics Data
metrics = [
  { label: 'Total Students', value: 120 },
  { label: 'Total Teachers', value: 25 },
  { label: 'Total Courses', value: 15 },
];

// Recent Activities Data
recentActivities = [
  'Added Student: John Doe',
  'Created Course: Math 101',
  'Assigned Course: Science 202 to Teacher: Jane Smith',
  'Edited Teacher Profile: Robert Brown',
];

// Notifications Data
notifications = [
  '3 Students awaiting approval.',
  '2 Courses need teacher assignment.',
  'Report submission deadline: Nov 30, 2024.',
];

ngOnInit(): void {
  // Initialize Chart
  const ctx = document.getElementById('chart') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Math', 'Science', 'History', 'English'],
      datasets: [
        {
          label: 'Courses per Subject',
          data: [10, 15, 8, 12],
          backgroundColor: ['#3f51b5', '#e91e63', '#4caf50', '#ff9800'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
      },
    },
  });
}
}
