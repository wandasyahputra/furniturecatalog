import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../redux/action/index'
import PropTypes from 'prop-types'
import CardProduct from '../components/cardProduct'
import Select from 'react-select'

const ProductSearch = (props) => {
  const [selectStyle, setSelectStyle] = useState([])
  const selectDelivery = [
    {label:'1 Week', value: '1 Week'},
    {label:'2 Week', value: '2 Week'},
    {label:'1 Month', value: '1 Month'},
    {label:'More', value: 'More'},
  ]
  useEffect(() => {
    if (!props.loading && !props.loaded && !props.error) {
      props.callProduct()
    }
  }, [])
  useEffect(() => {
    const option = []
    props.furniture_styles !== null && props.furniture_styles.map(item => {
      option.push({value:item, label:item})
    })
    setSelectStyle(option)
  }, [props.furniture_styles])
  return (
    <div className="container">
      <Select
        isLoading={props.loading}
        isDisabled={props.loading}
        isMulti
        options={selectStyle}
      />
      <Select
        isLoading={props.loading}
        isDisabled={props.loading}
        isMulti
        options={selectDelivery}
      />
      {props.loaded && props.product !== null ? props.products.map((item,key) => (
        <CardProduct
          key={key}
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
  furniture_styles: state.ProductReducer.data.furniture_styles,
  loading: state.ProductReducer.loading,
  loaded: state.ProductReducer.loaded,
  error: state.ProductReducer.error
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionsCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch)
