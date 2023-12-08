import React from 'react';
import { useSelector } from 'react-redux';
import ChartAll from './ChartAll';
import ChartAllHorizontal from './ChartAllHorizontal';

const Home = () => {

  const averages = useSelector(state => state.average.assignments);
  const showHorizontal = useSelector(state => state.horizontalBar.showHorizontalBar);
  
  return ( 
    <div className='all' >
        <section >
            {!showHorizontal &&
              <ChartAll assignments={averages}/>
            }
            {showHorizontal && 
              <ChartAllHorizontal assignments={averages}/>
            }
        </section>
    </div>
  );
};
 
export default Home;