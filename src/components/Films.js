import React, { Component } from 'react'
import Film from './Film'
import Search from "./Search";
import Loader from "./Loader";

export default class Films extends Component {

    state={
        movie:[],
        loading:true
    }


componentDidMount(){
    fetch(`http://www.omdbapi.com/?apikey=65e6b2ef&s=panda`)
    .then(response => response.json())
    .then(result=> this.setState({movie: result.Search}))
    .catch(err => console.log(err))
}

getFilms=(text)=>{
        this.setState({loading:true})
    fetch(`http://www.omdbapi.com/?apikey=65e6b2ef&s=${text}`)
    .then(response => response.json())
    .then(result=> this.setState({movie: result.Search, loading:false}))
    .catch(err => console.log(err))
}

    render() {
        return (
            <>
                <Search getFilms={this.getFilms} search={this.state.movie} />
                <div className='films'>

                    {this.state.loading ?
                        <Loader/>
                    :
                        this.state.movie.map(item=> <Film item= {item} key={item.imdbID}/>)
                    }
                </div>
            </>

        )
    }
}
