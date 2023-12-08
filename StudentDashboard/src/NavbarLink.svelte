<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './routes/Home.svelte';
  export let src;
  export let alt;
  export let path;
</script>

<Link to={path}>
  <img {src} {alt} />
</Link>

<style>
  img {
    width: 75px;
    border-radius: 50%;
    border: 1px solid #6699cc;
  }

</style>
