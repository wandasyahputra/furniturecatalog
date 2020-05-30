import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../redux/action/index'
import PropTypes from 'prop-types'
import CardProduct from '../components/cardProduct'


const ProductSearch = props => {
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
  }, [])
  return (
    <div>
      {props.loaded && props.product !== null ? props.products.map((item,key) => (
        <CardProduct
          name={item.name}
          desc={item.description}
          styles={item.furniture_style}
          delivery={item.delivery_time}
          price={item.price}
        />
      )) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.ProductReducer.data.products,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)
