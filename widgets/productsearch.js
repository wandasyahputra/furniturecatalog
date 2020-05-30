import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionsCreator } from '../redux/action/index'
import PropTypes from 'prop-types'
import CardProduct from '../components/cardProduct'
import Select from 'react-select'
import TextField from '../atomic/textField'
import { setProduct } from '../redux/collection/Product/actions'

let filterName = ''
let filterStyle = []
let filterDelivery = []
const ProductSearch = (props) => {
  const [selectStyle, setSelectStyle] = useState([])
  const [products, setProducts] = useState([])
  const selectDelivery = [
    {label:'1 Week', value: 1},
    {label:'2 Week', value: 2},
    {label:'1 Month', value: 3},
    {label:'More', value: 4},
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
    setProducts(props.products)
    setSelectStyle(option)
  }, [props.furniture_styles])
  
  const filterProduct = () => {
    const filteredProduct = []
    props.products.map((item) => {
      if(filterName !== '') {
        if (filterProductByName(item) === true) {
          filteredProduct.push(item)
        }
      } else if (filterStyle.length !== 0) {
        if (filterProductByStyle(item)=== true) {
          filteredProduct.push(item) 
        }
      } else if (filterDelivery.length !== 0) {
        if (filterProductByDelivery(item) === true) {
          filteredProduct.push(item) 
        }
      } else {
        filteredProduct.push(item)
      }
    })
    setProducts(filteredProduct)
  } 

  const filterProductByName = (item) => {
    if (item.name.toLowerCase().includes(filterName.toLowerCase())) {
      if (filterStyle.length !== 0) {
          return filterProductByStyle(item)
      } else if (filterDelivery.length !== 0) {
          return filterProductByDelivery(item)
      }
      return true
    } 
  }

  const filterProductByStyle = (item) => {
    for (let i = 0; i < item.furniture_style.length; i++ ) {
      for (let x = 0; x < filterStyle.length; x++) {
        if (item.furniture_style[i] === filterStyle[x].value) {
          if (filterDelivery.length !== 0) {
            return filterProductByDelivery(item)
          }
          return true
        }
      }
    }
  }

  const filterProductByDelivery = (item) => {
    for (let x = 0; x < filterDelivery.length; x++) {
      if(filterDelivery[x].value === 1 && item.delivery_time <= 7) {
        return true
      } else if (filterDelivery[x].value === 2 && item.delivery_time > 7 && item.delivery_time <= 14) {
        return true
      } else if (filterDelivery[x].value === 3 && item.delivery_time > 14 && item.delivery_time <= 31) {
        return true
      } else if (filterDelivery[x].value === 4 && item.delivery_time > 31) {
        return true
      }
    }
  }

  const searchNameOnChange = (value) => {
    filterName = value
    filterProduct()
  }
  const searchStyleOnChange = (value) => {
    console.log(value)
    if (value === null) {
      value = []
    }
    filterStyle = value
    filterProduct()
  }
  const searchDeliveryOnChange = (value) => {
    console.log(value)
    if (value === null) {
      value = []
    }
    filterDelivery = value
    filterProduct()
  }

  return (
    <div className="productSearch">
      <div className="productSearch-filter">
        <div className="container">
          <p className="productSearch-filter-title">Furniture Catalog </p>
          <TextField label="Search Furniture"
            onChange={searchNameOnChange}
            disabled={props.loading}
          />
          <Select
            isLoading={props.loading}
            isDisabled={props.loading}
            className="selectOption"
            classNamePrefix="selectOption"
            placeholder="Filter by style"
            isMulti
            onChange={searchStyleOnChange}
            options={selectStyle}
          />
          <Select
            isLoading={props.loading}
            isDisabled={props.loading}
            className="selectOption"
            classNamePrefix="selectOption"
            placeholder="Filter by delivery"
            isMulti
            onChange={searchDeliveryOnChange}
            options={selectDelivery}
          />

        </div>
      </div>
      <div className="container product">
        {props.loading ? (
          <p>Loading items</p>
        ): null}
        {props.loaded ? (
          <p>{`Displaying ${products !== null && products.length > 0 ? products.length : 'no'} items`}</p>
        ) : null}
        {props.loaded && products !== null ? products.map((item,key) => (
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
