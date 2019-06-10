import React from 'react';
import ReactDOM from 'react-dom';

import {Normalize} from 'styled-normalize';
import {InitialPage} from './views/InitialPage/components/InitialPage';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Normalize/>
        <InitialPage/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
