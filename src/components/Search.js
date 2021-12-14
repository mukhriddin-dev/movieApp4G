import React, { Component } from 'react'

export default class Search extends Component {

    state={
        film:''
    }

    render() {

        console.log(this.props.search)

        return (
            <div>
               <div className="row">
    <div className="input-field col s6">
      <input
            id="first_name2"
            type="text"
            class="validate"
            value={this.state.film}
            onChange={(e) => (this.setState({film:e.target.value}))}
            >

      </input>
    </div>

    <button
        className='btn bt'
        onClick={()=>(this.props.getFilms(this.state.film))}>
        Search Movie
    </button>

  </div></div>
        )
    }
}
