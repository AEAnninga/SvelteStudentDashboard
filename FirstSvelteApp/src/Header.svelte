<script>
</script>

<header class="headerContainer">
  <div class="upper-header">
    <h1>Winc Student Dashboard</h1>
  </div>
  <div class="lower-header">
    <h1>Winc Student Dashboard</h1>
  </div>
</header>

<style>
  @keyframes topHeader {
    0% {
      transform: translateY(-5em);
    }
    100% {
      transform: tranlateY(0.1);
    }
  }

  @keyframes topHeaderBackground {
    0% {
      background: #6699cc;
    }
    100% {
      background: purple;
    }
  }

  @keyframes bottomHeader {
    0% {
      transform: translateY(5em);
    }
    100% {
      transform: tranlateY(-1.41);
    }
  }

  @keyframes bottomHeaderBackground {
    0% {
      background: #6699cc;
    }
    100% {
      background: purple;
    }
  }

  .headerContainer {
    transform: translateY(-32px);
  }

  h1 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  .upper-header {
    color: #6699cc;
    /* color: white; */
    height: 2.5em;
    width: 100%;
    text-align: center;
    background: purple;
    /* animation: topHeaderBackground 1s ease forwards; */
  }

  .upper-header > h1 {
    display: absolute;
    transform: translateY(0.1em);
    overflow: hidden;
    animation: topHeader 1s ease forwards;
  }

  .lower-header {
    height: 2.5em;
    width: 100%;
    text-align: center;
    background: #6699cc;
    color: purple;
    /* transform: translateY(-0.5em); */
    overflow: hidden;
    /* animation: bottomHeaderBackground 1s ease forwards; */
  }

  .lower-header > h1 {
    display: absolute;
    transform: translateY(-1.41em);
    animation: bottomHeader 1s ease forwards;
    overflow: hidden;
  }
</style>
