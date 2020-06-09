import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      genre: '',
      tranche_d_age: '',
      pays: '',
      ville: '',
      email: '',
      password: '',
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

    const newUser = {
      genre: this.state.genre,
      tranche_d_age: this.state.tranche_d_age,
      pays: this.state.pays,
      ville: this.state.ville,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Inscription</h1>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  name="genre"
                  placeholder="Entrez votre sexe"
                  value={this.state.genre}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="tranche_d_age">Tranche d'âge</label>
                <input
                  type="text"
                  className="form-control"
                  name="tranche_d_age"
                  placeholder="Entrez votre tranche d'âge"
                  value={this.state.tranche_d_age}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
              <label htmlFor="pays">Pays d'origine</label>
              <input
                type="text"
                className="form-control"
                name="pays"
                placeholder="Entrez votre pays d'origine"
                value={this.state.pays}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="ville">Ville d'origine</label>
            <input
              type="text"
              className="form-control"
              name="ville"
              placeholder="Entrez votre ville d'origine"
              value={this.state.ville}
              onChange={this.onChange}
            />
          </div>
              <div className="form-group">
                <label htmlFor="email">Mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Entrez votre email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Mot de passe"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                S'inscrire!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
