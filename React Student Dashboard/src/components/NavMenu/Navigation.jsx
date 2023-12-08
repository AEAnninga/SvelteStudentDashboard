import React from 'react';
import { useSelector } from 'react-redux';
import NavMenu from './NavMenu';
import NavMenuSmall from './NavMenuSmall';

const Navigation = () => {

    const windowWidth = useSelector(state => state.window.width);

    return ( 
        <nav >
            <div className='NavMenu'>
              {windowWidth > 600 ? <NavMenu /> : <NavMenuSmall />}
            </div>
        </nav>
    );
};
 
export default Navigation;