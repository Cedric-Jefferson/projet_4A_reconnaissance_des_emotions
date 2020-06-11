import React, { Component } from 'react'
import { ReactMic } from '../../../src'
import jwt_decode from 'jwt-decode'
import dom from 'dom'

require('./styles.scss')

class AudioList extends Component {

  stateL = {
    tabrecords: {
      record : new Blob()
    }
  }

  constructor(props) {
    super(props)
    /*this.state = {
      record: new Blob()
    }*/
  }

  componentDidMount() {
    const token = localStorage.recordtoken
    const decoded = jwt_decode(token)
    /*this.setState({
      record: decoded.record
    })*/
    this.stateL.tabrecords.record = decoded.record
  }

  render() {
    const {
      blobURL,
      downloadLinkURL,
      isRecording,
      recordingInSession,
      recordingStarted,
      recordingStopped
    } = this.state

    const recordBtn = recordingInSession ? "fa disabled fa-record-vinyl fa-fw" : "fa fa-record-vinyl fa-fw"
    const stopBtn = !recordingStarted ? "fa disabled fa-stop-circle" : "fa fa-stop-circle"
    const downloadLink = recordingStopped ? "fa fa-download" : "fa disabled fa-download"

    const tabrecords = []; let i = 0;

    return (
      <div>
        <div id="project-wrapper">
          <div id="project-container">
            <div id="overlay" />
            <div id="audio-playback-controls">
              <audio ref="audioSource" controls="controls" src={this.stateL.tabrecords.record} controlsList="nodownload"/>
            </div>
            <div className="column download">
                  <a
                    className={downloadLink}
                    href={URL.createObjectURL(this.stateL.tabrecords.record)}
                    download={`recording.wav`}
                  />
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AudioList
