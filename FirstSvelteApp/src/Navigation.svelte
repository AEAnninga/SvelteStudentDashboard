<script>
  import { wincData } from './json-to-js/data-utils.js';
  console.log(wincData);
  import NavMenu from './NavMenu.svelte';
</script>

<nav>
  <div>
    <!-- {windowWidth > 600 ? <NavMenu /> : <NavMenuSmall />} -->
    <NavMenu />
  </div>
</nav>

<!-- <nav >
    <div className='NavMenu'>
      {windowWidth > 600 ? <NavMenu /> : <NavMenuSmall />}
    </div>
</nav> -->
