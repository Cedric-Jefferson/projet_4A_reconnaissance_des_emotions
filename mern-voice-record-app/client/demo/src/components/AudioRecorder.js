import React, { Component } from 'react'
import { ReactMic } from '../../../src'
import { audiorecorder } from './UserFunctions'

require('./styles.scss')

class AudioRecorder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      downloadLinkURL: null,
      isRecording: false,
      recordingStarted: false,
      recordingStopped: false,
      record : null,
      version_record:"None",
      ref_micro_record:"None",
      ref_device_record:"None"
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const newRecord = {
      record: this.state.record,
      version_record: this.state.version_record,
      ref_micro_record: this.state.ref_micro_record,
      ref_device_record: this.state.ref_device_record
    }

    audiorecorder(newRecord).then(res => {
      this.props.history.push(`/audiocheck`)
    })
  }

  stopRecording= () => {
    this.setState({ isRecording: false })
  }

  onSave=(blobObject) => {
    this.setState({
      downloadLinkURL: blobObject.blobURL,
    })
  }

  onStart=() => {
    console.log('You can tap into the onStart callback')
  }

  onStop= (blobObject) => {
    this.setState({ blobURL: blobObject.blobURL }),
    this.setState({ record: blobObject.blobURL })
  }

  getRecord=() =>{
    return this.state.record
  }

  getVersion=() =>{
    return this.state.version_record
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
      record,
      isRecording,
      recordingInSession,
      recordingStarted,
      recordingStopped
    } = this.state

    const recordBtn = recordingInSession ? "fa disabled fa-record-vinyl fa-fw" : "fa fa-record-vinyl fa-fw"
    const stopBtn = !recordingStarted ? "fa disabled fa-stop-circle" : "fa fa-stop-circle"
    const downloadLink = recordingStopped ? "fa fa-download" : "fa disabled fa-download"

    return (
      <div>
        <div id="project-wrapper">
          <div id="project-container">
            <div id="overlay" />
            <div id="content">
              <h2>React-Mic</h2>
              <h3>Record a .wav Audio File of your voice</h3>
              <ReactMic
                className="oscilloscope"
                record={isRecording}
                backgroundColor="#333333"
                visualSetting="sinewave"
                audioBitsPerSecond={128000}
                onStop={this.onStop}
                onStart={this.onStart}
                onSave={this.onSave}
                onData={this.onData}
                onBlock={this.onBlock}
                onPause={this.onPause}
                strokeColor="#0096ef"
              />
              <div id="oscilloscope-scrim">
                {!recordingInSession && <div id="scrim" />}
              </div>
              <div id="controls">
                <div className="column active">
                  <i
                    onClick={this.startRecording}
                    className={recordBtn}
                    aria-hidden="true"
                  />
                </div>
                <div className="column">
                  <i
                    onClick={this.stopRecording}
                    className={stopBtn}
                    aria-hidden="true"
                  />
                </div>
                <div className="column download">
                  <a
                    className={downloadLink}
                    href={downloadLinkURL}
                    download={`recording.wav`}
                  />
                </div>
              </div>
            </div>
            <div id="audio-playback-controls">
              <audio ref="audioSource" controls="controls" src={blobURL} controlsList="nodownload"/>
            </div>
          </div>
          <div>
            <h3>See the list of all your records</h3>
            <form noValidate onSubmit={this.onSubmit}>
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="record"
                value={record}
                onChange={this.onChange}
              />
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="version_record"
                value="None"
              />
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="ref_micro_record"
                value="None"
              />
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="ref_device_record"
                value="None"
              />
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                C'est parti
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AudioRecorder
