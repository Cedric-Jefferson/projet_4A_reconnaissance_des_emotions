import React, { Component } from 'react'
import { ReactMic } from '../../../src'
import jwt_decode from 'jwt-decode'
import dom from 'dom'

require('./styles.scss')

class AudioList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: null,
      i: 0
    }
  }

  componentDidMount() {
    const token = localStorage.recordtoken
    const decoded = jwt_decode(token)
    this.setState({
      record: decoded.record,
      i : 1
    })
  }

  onChange(e) {
    this.setState({ i: 0 })
  }

  render() {
    const {
      blobURL,
      downloadLinkURL
    } = this.state
    while (1) {
      if (this.state.i == 1) {
        return (
          <div>
            <div id="project-wrapper">
              <div id="project-container">
                <div id="overlay" />
                <div id="audio-playback-controls">
                  <audio onChange={this.onChange} ref="audioSource" controls="controls" src={this.state.record} controlsList="nodownload"/>
                </div>
                <div className="column download">
                      <a
                        className={downloadLink}
                        href={URL.createObjectURL(this.state.record)}
                        download={`recording.wav`}
                      />
                </div>
    
              </div>
            </div>
          </div>
        )
      }
    }
    
  }
}

export default AudioList
