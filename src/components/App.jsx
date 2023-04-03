import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DeleteTeam } from './DeleteTeam';
import { EditTeam } from './EditTeam';
import { TeamAdd } from './TeamAdd';
import { Teams } from './Teams';
import { WatchTeam } from './WatchTeam';


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path='/team/watch/:tla' element={<WatchTeam />} />
        <Route path='/team/add' element={<TeamAdd />} />
        <Route path='/team/edit/:tla' element={<EditTeam />} />
        <Route path='/team/delete/:tla' element={<DeleteTeam />} />
      </Routes>
    </Router>

  )
}

export default App
