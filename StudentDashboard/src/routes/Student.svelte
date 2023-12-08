<script>
  import { Link } from 'svelte-routing';
  export let assignments;
  export let country;
  export let email;
  export let gender;
  export let id;
  export let jobtitle;
  export let name;
  export let phone;
  export let photo;
  export let surname;
</script>

<div class="student-card">
  <div class="avatar">
    <img src={photo} alt={name} />
  </div>
  <div class="middle">
    <h1>{name} {surname}</h1>
    <Link to="{name}/assignments">
      <button id="assignments-button">Assignments</button>
    </Link>
  </div>
  <div>
    <p>Gender: {gender}</p>
    <p>Country: {country}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Jobtitle: {jobtitle}</p>
  </div>
</div>

<style>
  .student-card {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 0px 3px purple;
    background: whitesmoke;
    color: black;
    padding: 25px;
    margin: 25px;
    border-left: 10px solid yellow;
  }

  img {
    width: 150px;
    border-radius: 5px;
  }

  #assignments-button {
    background: #6699cc;
    color: whitesmoke;
    width: 15vw;
    height: 50px;
    outline: purple;
    border: none;
    border-radius: 5px;
  }

  .middle {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
</style>
