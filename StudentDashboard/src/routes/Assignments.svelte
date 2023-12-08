<script>
  export let studentData;
  console.log(studentData);
  import BarChart from './BarChart.svelte';
  import BarChartHorizontal from './BarChartHorizontal.svelte';
</script>

<div class="chart-container">
  <div class="chart">
    <BarChart {studentData} />

    <!-- <BarChartHorizontal {studentData} /> -->
  </div>
</div>

<style>
  .chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 25px;
    margin: 25px;
    height: 100%;
    border-radius: 10px;
    /* background-image: linear-gradient(312.25deg, #6699cc 0%, whitesmoke 66.19%); */
    background: whitesmoke;
    border-right: 15px solid yellow;
    border-left: 15px solid rgba(155, 153, 153, 0.63);
  }

  .chart {
    width: 95%;
  }

  canvas {
    width: 95%;
    /* height: 100%; */
  }
</style>
