import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { navActions } from '../../store/navigationSlice';

const imgUrl = require('../../images/winc-logo-4.png');

const NavMenu = () => {
  const studentData = useSelector(state => state.data);
  const navTabPath = useSelector(state => state.navigation.path);
  const studentState = useSelector(state => state.student);
  const dispatch = useDispatch();
  const navClassAll = navTabPath === '/' ? 'active-home-tab' : '';

  const handleTabStyle = (navPath) => {
    dispatch(navActions.setPath(navPath));
  };

  return (
    <>
      <div id='nav-all' className={navClassAll}>
        <NavLink to="/" onClick={() => handleTabStyle('/')}>
          <img className="home-icon" src={imgUrl} alt='winc-logo'/>
        </NavLink>
      </div>

      {studentData.map((student, index) => {
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
      }
    </>
  );
};
 
export default NavMenu;