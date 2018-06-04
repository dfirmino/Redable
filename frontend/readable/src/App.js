import React, { Component } from 'react';
import { incrementarAction } from './actions/index'
import './App.css';
import * as api from './Api';

class App extends Component {
  state = {
    number: ''
  }

  componentDidMount() {
    const { store } = this.props
    store.subscribe( () => {
      this.setState( () => ({
        number: store.getState()
      }))
    })

  }

  incrementarState = () => {
    let number = this.numero;
    this.props.store.dispatch(incrementarAction({ number }))
    this.numero.value = '';
  }

  
  render() {
    return (
      <div>
        <h1>
          Teste
        </h1>
        <p>Valor do Estado: { this.state.number }</p>
        <input type='text' ref ={(numero) => this.numero = numero } />
        <button onClick={this.incrementarState} >Atualizar</button>
      </div>
    );
  }
}

export default App;
