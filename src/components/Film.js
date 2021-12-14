import React from 'react'

export default function Film({item}) {
    console.log(item)
    return (
        <div>

<div className="card item">
    <div className="card-image waves-effect waves-block waves-light">
          <img className='activator' src={item.Poster} alt="" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{item.Title}<i class="material-icons right">more_vert</i></span>
      <p>{item.Type}  <span>{item.Year}</span> </p>
    </div>
 
  </div>








        </div>
    )
}
