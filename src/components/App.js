import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import StreamEdit from './StreamEdit';


const App = () => {
  return (
    <div>
      <BrowserRouter >
      <div>
          <Route path='/' exact component={StreamList} />
          <Route path='/new' exact component={StreamCreate} />
          <Route path='/edit' exact component={StreamEdit} />
          <Route path='/delete' exact component={StreamDelete} />
          <Route path='/show' exact component={StreamShow} />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
