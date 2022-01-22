import React from 'react';
import './App.css';
import Circle from './components/Circle';
import NavBar from './components/NavBar';
import ReviewCard from './components/ReviewCard';
import UpcomingShowCard from './components/UpcomingShowCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='hero'>
        <div className='hero-heading'>Cari Cari</div>
        <div className='hero-description'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</div>
      </div>
      <div className='circle-container'>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </div>
      <div className='shows-container'>
       <div className='shows-container-heading'>
         <h1>Upcoming Shows</h1>
         <h5>View All</h5>
       </div>
       <div className='card-container'>
       <UpcomingShowCard />
       <UpcomingShowCard />
       <UpcomingShowCard />
       <UpcomingShowCard />
       </div>
      </div>
      <div className='review-list'>
        <div className='review-container-header'>
         <h1>Reviews</h1>
         <div>1/12
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
         </div>
        </div>
      <div className='review-container'>
       <ReviewCard />
       <ReviewCard />
       <ReviewCard />
      </div> 
      </div>
    </div>
  );
}

export default App;
