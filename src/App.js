import React from 'react';
import './App.css';
import ReviewCard from './components/ReviewCard';
import UpcomingShowCard from './components/UpcomingShowCard';

function App() {
  return (
    <div className="App">
       <UpcomingShowCard />
       {/* <ReviewCard /> */}
    </div>
  );
}

export default App;
