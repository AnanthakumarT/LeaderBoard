import React, { useState, useEffect } from 'react';
import  Leaderboard from "./leaderboard/Leaderboard";
import './styles/globalcss.css'

const App = props => {

  return (
    <div>
        <Leaderboard/>
    </div>
  )
}

App.propTypes = {

}

export default App
