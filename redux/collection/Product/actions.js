import {
  SET_PRODUCT,
} from '../../types'
import axios from 'axios'
import { home } from '../../../endpoint/furniturecatalog'
import {
  successState,
  errorState
} from '../../../utils/initState'

export const setProduct = data => ({
  type: SET_PRODUCT,
  payload: data
})

export const callProduct = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.get(home)
        .then(({ data }) => {
          console.log(data)
          const dataContainer = {
            products: null,
            furniture_styles: null
          }
          if (data !== null) {
            dataContainer.furniture_styles = data.furniture_styles
            dataContainer.products = data.products
          }
          dispatch(setProduct({ data: dataContainer }))
          dispatch(setProduct(successState))
          resolve(data)
        })
        .catch((error) => {
          dispatch(setProduct(errorState))
          reject(error)
        })
    })
  }
}
