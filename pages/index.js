import Head from 'next/head'
import gambar from '../public/vercel.svg'

export default function Home() {
  return (
    <div>
    <div className="card">
      <div className="title">
        <h4 className="title">
          Product Name
        </h4>
        <span className="price">Price</span>
      </div>
      <p className="description">Description</p>
      <p className="style">Furniture Styles</p>
      <button className="delivery">Delivery Days</button>
    </div>
    <div className="card">
      <div className="title">
        <h4 className="title">
          Product Name
        </h4>
        <span className="price">Price</span>
      </div>
      <p className="description">Description</p>
      <p className="style">Furniture Styles</p>
      <button className="delivery">Delivery Days</button>
    </div>
    <div className="card">
      <div className="title">
        <h4 className="title">
          Product Name
        </h4>
        <span className="price">Price</span>
      </div>
      <p className="description">Description</p>
      <p className="style">Furniture Styles</p>
      <button className="delivery">Delivery Days</button>
    </div>
    </div>
  )
}
