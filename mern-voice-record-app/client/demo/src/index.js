import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactGA from 'react-ga'
import AudioRecorder from './components/AudioRecorder'

ReactGA.initialize('UA-98862819-1')

require('./normalize.scss')
require('./styles/font-awesome/css/all.min.css')
require('./styles.scss')

//ReactDOM.render(<App />, document.getElementById('root'));


export default class Demo extends Component {
  render() {
    return (
      <div>
        <App/>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
registerServiceWorker();