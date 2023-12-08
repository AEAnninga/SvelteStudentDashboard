<script>
  import { Bar } from 'svelte-chartjs';
  // import Chart from 'chart.js/auto';
  import { createBarChartData } from './utils/bar-chart-utils.js';
  export let studentData;
  import { averageAllAssignments as averages } from './utils/assignments-utils.js';
  // Chart.register();

  const barChartData = createBarChartData(studentData, averages, 'x', true);
  const data = barChartData.data;
  const options = barChartData.options;
</script>

<div>
  <Bar {data} {options} />
</div>
