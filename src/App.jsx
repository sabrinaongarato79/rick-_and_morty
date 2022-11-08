
import { useState } from 'react'
import './App.css'
import CardHeader from './components/CardHeader';
import ResidentInfo from './components/ResidentInfo';
import SearchData from './components/SearchData'


const App = () => {

  const [location, setLocation] = useState({});

  return <div className='app-semana3'>
    <h1>Rick And Morty Wiki</h1>
    
    <SearchData setLocation={setLocation} />

    { 
      location.id != null && (
        <CardHeader 
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          population={location.residents.length}
        />
      )
    }

    { 
      location.id != null && (<>
          <h2>Residents</h2>
          <div className="container-resident">
            {
              location.residents.map( (resident) => {
                return <ResidentInfo key={resident} url={resident} />
              } )
            }
          </div>
      </>)
    }
  </div>

}

export default App
