import React from 'react'
import Friend from './Friend.js'
import data from "./friendsData"

function App() {


  const friendList = data.map(item => 
    <Friend
      key={Math.random()}
      friend={item} />)

  return (
    <div className="App">
      {friendList}

    </div>
  );
}

export default App;
