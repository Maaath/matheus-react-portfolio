import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Learn & improve. With heart and professionalism.</h1>
            <p className="pl-desc">
            Some projects where i worked. <b>Click them</b> to more informations.
            </p>
        </div>
        <div className="pl-list">
          {products.map((item)=>(
            <Product key={item.id} img={item.img} link={item.link} name={item.name}/>
          ))}            
        </div> 

    </div>
  )
}

export default ProductList