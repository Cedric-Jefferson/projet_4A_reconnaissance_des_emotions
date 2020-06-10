import React, { Component } from 'react'
import { ReactMic } from '../../../src'
import jwt_decode from 'jwt-decode'

require('./styles.scss')

class AudioList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      record: null
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      record: decoded.record
    })
  }

  stopRecording= () => {
    this.setState({ isRecording: false })
  }

  onSave=(blobObject) => {
    this.setState({
      downloadLinkURL: blobObject.blobURL
    })
  }

  onStart=() => {
    console.log('You can tap into the onStart callback')
  }

  onStop= (blobObject) => {
    this.setState({ blobURL: blobObject.blobURL })
  }

  onData(recordedBlob){
    // console.log('ONDATA CALL IS BEING CALLED! ', recordedBlob);
  }

  onBlock() {
    alert('ya blocked me!')
  }

  startRecording= () => {
    this.setState({
      isRecording: true,
      recordingInSession: true,
      recordingStarted: true,
      recordingStopped: false,
      isPaused: false
    })
  }

  stopRecording=() => {
    this.setState({
      isRecording: false,
      recordingInSession: false,
      recordingStarted: false,
      recordingStopped: true
    })
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
              <audio ref="audioSource" controls="controls" src={this.state.record} controlsList="nodownload"/>
            </div>
            <div className="column download">
                  <a
                    className={downloadLink}
                    href={this.state.record.blobURL}
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
