import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/NavMenu/Navigation';
import Home from './components/Home/Home';
import Student from './components/Student/Student';
import { windowActions } from './store/windowSlice';
import { horizontalBarActions } from './store/horizontalBarSlice';
import './css/App.css';
// import below needed to register every element used from ChartJS (for charts to work)
import 'chart.js/auto';

function App() {
  
  const studentData = useSelector(state => state.data);
  const averages = useSelector(state => state.average.assignments);
  const windowWidth = useSelector(state => state.window.width);
  
  const dispatch = useDispatch();

  // keep track of window size
  useEffect(() => {
    const handleWindowResize = () => {
      dispatch(windowActions.setWidth())
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    };
  });

  // switch to horizontal barchart based on window size 
  useEffect(() => {
    if (windowWidth < 1100) {
      dispatch(horizontalBarActions.setShowHorizontalBar(true))
    }
    if (windowWidth > 1100) {
      dispatch(horizontalBarActions.setShowHorizontalBar(false))
    }
  }, [windowWidth, dispatch]);
  
  return (
    <>
      <Header />
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {studentData.map((student) => (
              <Route path={`/${student.name}`} key={student.id}>
                <Student 
                  studentData={student}
                  averages={averages}
                /> 
              </Route>
            ))}
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
