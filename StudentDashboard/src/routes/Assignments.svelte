<script>
  export let studentData;
  console.log(studentData);
  import BarChart from './BarChart.svelte';
  import BarChartHorizontal from './BarChartHorizontal.svelte';
  import NavbarLink from '../NavbarLink.svelte';
  import { Router, Route, Link } from 'svelte-routing';

  let src = studentData.photo;
  let alt = studentData.name;
  let path = studentData.name;
</script>

<div class="chart-container">
  <div class="student-link">
    <Link to={path}>
      <img {src} {alt}/>
    </Link>
  </div>
  <div class="chart">
    <BarChart {studentData} />
    <!-- <BarChartHorizontal {studentData} /> -->
  </div>
</div>
<aside>
  <ul class="social-media">
    <li>
        <img class="social-media__blog" {src} {alt}/>
    </li>

</ul>
</aside>

<style>
  .chart-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    /* box-sizing: border-box; */
    padding: 25px;
    margin: 25px;
    height: 100%;
    border-radius: 10px;
    /* background-image: linear-gradient(312.25deg, #6699cc 0%, whitesmoke 66.19%); */
    background: whitesmoke;
    /* border-right: 15px solid yellow; */
    border-left: 7px solid rgba(0, 83, 49, 0.589);
    border-bottom: 7px solid rgba(1, 90, 68, 0.836);
    box-shadow: -7px 7px 7px -5px rgba(72, 161, 153, 0.281);
  }

  .chart {
    width: 100%;
    padding: 25px;
    
  }
  canvas {
    /* justify-self: center; */
    width: 100%;
    /* height: 100%; */
  }

  @keyframes hoverImage {
    0% {
      width: 0%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    100% {
      width: 100%;
      border-top-left-radius: 75px;
      border-bottom-left-radius: 75px;
    }
  }

  @keyframes rollImage {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

  }

  @keyframes hoverImageBack {
    0% {
      width: 100%;
      border-top-left-radius: 75px;
      border-bottom-left-radius: 75px;
    }
    100% {
      width: 0%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }

  @keyframes rollImageBack {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }

  }

  .student-link {
    align-self: start;
    /* animation: hoverImageBack 0.3s ease-in-out forwards; */
    transition: width 0% 0.3s;
    transform:bac none 0.3s;
  }
  
  .student-link img {
    display: absolute;
    border: 5px solid #6699cc;
    border-radius:50%;
    animation: rollImageBack 0.6s ease-out forwards;
  }

  .student-link:hover {
    background: linear-gradient(90deg, #6699cc 0%,#6699cc6e 35%, whitesmoke 100%);
    /* background: linear-gradient(90deg, #6699cc 0%,#6699cc6e 35%, whitesmoke 100%);
    width: 100%;
    border-top-left-radius: 75px;
    border-bottom-left-radius: 75px; */
    animation: hoverImage 0.3s ease-in-out forwards;
  }

  .student-link img:hover {
    animation: rollImage 0.6s ease-out forwards;
  }

  aside {

position: sticky;
bottom: 50px;
display: flex;
flex-flow: column nowrap;

}


.social-media {
display: flex;
flex-flow: column nowrap;
width: 100%;
justify-content: flex-end;
align-items: flex-end;    
position: absolute;
bottom: 50px;
list-style: none;
padding: 0;
margin: 0;
}

.social-media__blog {
display: flex;
flex-flow: row nowrap;
justify-content: start;
align-items: center;
width: 50px;
height: 50px;
transition: width 1s;
overflow: hidden;        
gap: 25px;
padding: 12px;
background-color: #e17b77; 
}

.social-media__blog::before {
content: "\\f37c";
font-family: "Font Awesome 5 Brands";
font-size: 30px;
color: white;
}

&::after {
content:"Back to student";
color: white;
text-decoration: underline;
height: 24px;
overflow: hidden;
opacity: 0;
transition: opacity 0.4s;
}

.social-media__blog:hover {

width: 250px;
transition: width 1s;
overflow: hidden;
}

.social-media__blog:hover::after {

  content: "Back to student";
  color: white;
  text-decoration: underline;
  height: 24px;
  overflow: hidden;
  opacity: 1;
  transition: opacity 3s;
}

</style>
