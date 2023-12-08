<script>
  let wincLogo = 'https://randomuser.me/api/portraits/women/21.jpg';
</script>

<div>
  <img src="./winc-logo-4.png" alt="winc-logo" />
</div>

<!-- {studentData.map((student, index) => {
    const showStudent = studentState[index].showStudent;
    const studentPath =  showStudent ? `/${student.name}` : `/${student.name}/assignments`;
    const hasMoreFun = studentState[index].hasMoreFun;
    const isActive = navTabPath === `/${student.name}` | navTabPath === `/${student.name}/assignments`;
    // when student navtab is active > if student average fun is higher then avg difficulty: purple border, else blue border
    const navClassStudent = (isActive && hasMoreFun) ? 'active-fun-tab' : (isActive ? 'active-home-tab' : null);
   
    return (
      <div key={index} id={student.id} className={navClassStudent}>
        <NavLink 
          key={student.id} 
          to={studentPath}
          onClick={() => handleTabStyle(studentPath)}
        >
          <img src={student.photo} alt='person'/>
        </NavLink>
      </div> 
    )})
  } -->
