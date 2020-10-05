import Navbar from './Navbar';
import About from './About';
import Shop from './Shop';
import './App.css';
import axios from 'axios'
import React, { Component } from 'react'


const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/posts/`
})

export default class App extends Component {

  state = {
    Books: []
  }

  componentDidMount() {

    api.get('/').then(res => {
      this.setState(prevState => {
        return {
          Books: res.data
        }
      }
      )
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.Books.map(obj => <h5 key={obj.id}>{obj.title} </h5>)}
        <About />
        <Shop />
      </div>
    )
  }
}
