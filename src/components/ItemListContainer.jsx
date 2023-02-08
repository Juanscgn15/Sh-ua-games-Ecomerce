import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container-fluid text-bg-primary p-3">
    <div>
<p > {greeting} </p>
    </div>
    </div> )
}

export default ItemListContainer