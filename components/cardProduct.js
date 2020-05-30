import React from 'react'
import PropTypes from 'prop-types'
import Card from '../atomic/card'
import {numberFormat} from '../utils/currency'
import {arrayToString} from '../utils/arrayToString'

const CardProduct = props => {
  return (
    <Card className="cardProduct">
      <div className="title">
        <h4 className="title">
          {props.name}
        </h4>
        <span className="price">Rp {numberFormat(props.price)}</span>
      </div>
      <p className="description">{props.desc.length > 140 ? props.desc.slice(0,140) + '...' : props.desc}</p>
      <p className="style">{arrayToString(props.styles)}</p>
      <button className="delivery">{props.delivery} Days</button>
    </Card>
  )
}

export default CardProduct