<script>
  import NavbarLink from './NavbarLink.svelte';
  import { wincData } from './routes/json-to-js/data-utils.js';
  let srcLogo = '../public/winc-logo-4.png';
  let srcAlt = 'winc-logo';
  console.log(wincData);
</script>

<div id="navbar">
  <NavbarLink src={srcLogo} alt={srcAlt} path="/" />

  {#each wincData as student (student.id)}
    <NavbarLink src={student.photo} alt={student.name} path={student.name} />
  {/each}
</div>

<style>
  #navbar {
    width: 100vw;
    height: 10vh;
    background: whitesmoke;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
