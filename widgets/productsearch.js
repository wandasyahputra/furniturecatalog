import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../redux/action/index'
import PropTypes from 'prop-types'
import CardProduct from '../components/card'


const ProductSearch = props => {
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
  }, [])
  return (
    <div>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  )
}

const mapStateToProps = state => ({
  productReducer: state.ProductReducer.data.product,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)
