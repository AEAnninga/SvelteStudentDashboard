<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  import Student from './routes/Student.svelte';
  import Assignments from './routes/Assignments.svelte';

  import Header from './Header.svelte';
  import Navbar from './Navbar.svelte';

  import { wincData } from './routes/json-to-js/data-utils.js';
  export let url = '';
  import Chart from 'chart.js/auto';
  Chart.register();
</script>

<Header />
<Router {url}>
  <Navbar />
  <div>
    <Route path="/"><Home /></Route>
    {#each wincData as student (student.id)}
      <Route path={student.name}>
        <Student {...student} />
      </Route>
      <Route path="{student.name}/assignments">
        <Assignments studentData={student} />
      </Route>
    {/each}
  </div>
</Router>

<style>
</style>
