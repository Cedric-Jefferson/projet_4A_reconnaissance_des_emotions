import React, { Component } from 'react'
import { ReactMic } from '../../../src'
import { audiocheck } from './UserFunctions'
import AudioRecorder from './AudioRecorder'

require('./styles.scss')

class AudioCheck extends Component {

  constructor(props) {
    super(props)
    this.state = {
      record : null,
      version_record:"None",
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const Record = {
      record: this.state.record,
      version_record: this.state.version_record
    }

    audiocheck(Record).then(res => {
        if (res) {
          this.props.history.push(`/audiolist`)
        }
    })                                                                                                                                                      
  }

  render() {
    return (
      <div>
        <div id="project-wrapper">
          <div>
            <h3>See the list of all your records</h3>
            <form noValidate onSubmit={this.onSubmit}>
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="record"
                value="{AudioRecorder.getRecord}"
              />
              <input
                type="text"
                hidden="true"
                className="form-control"
                name="version_record"
                value="{AudioRecorder.getVersion}"
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

export default AudioCheck
