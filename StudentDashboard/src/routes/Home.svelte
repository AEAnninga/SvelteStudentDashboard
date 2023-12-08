<script>
  import { wincData } from './json-to-js/data-utils.js';
  import Student from './Student.svelte';
</script>

<main>
  {#each wincData as student (student.id)}
    <Student {...student} />
  {/each}
</main>

<style>
  main {
    width: 100vw;
    margin: 0px;
    padding: 0px;
  }
</style>
