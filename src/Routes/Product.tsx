import { IProductRouteProps } from '../types'

const Product = ({milk, i}:IProductRouteProps) => {
  console.log(milk)
  return (
		<div>Hello is is the product page</div>

  )
}

export default Product