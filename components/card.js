import React from 'react'
import PropTypes from 'prop-types'
import Card from '../atomic/card'

const CardProduct = props => {
  return (
    <Card className="cardProduct">
      <div className="title">
        <h4 className="title">
          Product Name
        </h4>
        <span className="price">Price</span>
      </div>
      <p className="description">Description</p>
      <p className="style">Furniture Styles</p>
      <button className="delivery">Delivery Days</button>
    </Card>
  )
}

export default CardProduct