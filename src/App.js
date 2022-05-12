import "./App.css";
import contacts from './contacts.json'
import Contacts5 from './components/contacts'
import './components/contacts.css'
import {useState} from 'react';

function App() {
  let fiveContacts=contacts.slice(0,5)
  const[newContacts, setNewContacts]=useState(fiveContacts)
  //console.log(newContacts)
  const addRandom=()=>{
    let randomCelebrity=contacts[Math.floor(Math.random()*(contacts.length-1))]
    //console.log(randomCelebrity)
    let new5=[...newContacts, randomCelebrity]
    setNewContacts(new5)
  }

  const sortListbyName=()=>{
    let sortedListbyName=[...newContacts].sort((a,b)=>
      a.name>b.name ? 1 : -1)
    //console.log(sortedListbyName)
    setNewContacts(sortedListbyName)
  }

  const sortListbyPopularity=()=>{
    let sortedListbyPopularity=[...newContacts].sort((a,b)=>b.popularity-a.popularity)
    //console.log(sortedListbyPopularity)
    setNewContacts(sortedListbyPopularity)
  }

  const deleteCelebrity=(celebrityId)=>{
    let filterCelebrity = [...newContacts].filter(celebrity=>{
      return celebrity.id !== celebrityId
    })
    setNewContacts(filterCelebrity)
  }

  return(
    <div className="App">
      <h1>IronContacts</h1>
      <div>
      <button onClick={addRandom}>Add Random Contact</button>
      </div>
      <div>
      <button onClick={sortListbyName}>Sort by Name</button>
      </div>
      <div>
      <button onClick={sortListbyPopularity}>Sort by popularity</button>
      </div>
      <div>
        {newContacts.map((celebrity)=>{
          return(
            <div key={celebrity.id}>
              <Contacts5
                id={celebrity.id}
                name={celebrity.name}
                pictureUrl={celebrity.pictureUrl}
                popularity={celebrity.popularity}
                wonEmmy={celebrity.wonEmmy}
                wonOscar={celebrity.wonOscar}
                deleteCelebrity={deleteCelebrity}
              />
            </div>
          )
        })}

      </div>
    </div>
    
    ) 
  



}
export default App;