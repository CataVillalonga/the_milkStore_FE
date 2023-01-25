import { IProductRouteProps } from '../types'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"
import milkImg from '../assets/milk.png'
import '../Styles/Product.css'

const Product = ({milk, i}:IProductRouteProps) => {
  const navigate = useNavigate();
  
  const [selectedMilkAmount,setSelectedMilkAmount] = useState('50')

  const handleHomeNav = () => {
    navigate('/')
  }
  const updateTextInput = (e: ChangeEvent<HTMLInputElement>) => {
   setSelectedMilkAmount(e.target.value)
  }

  console.log(selectedMilkAmount)
  return (
		<main className='product-section'>
      <div className='product-section-img'>
        <button onClick={() => handleHomeNav()}>{'< Back'}</button>
        <img src={milkImg} alt="milk product" />
      </div>
      <div className='product-section-description'>
        <h1>{milk.name}</h1>
        <p>{milk.type}</p>
        <input type="range" min="1" max={milk.storage} value={selectedMilkAmount} onChange={(e) => updateTextInput(e)}/>
        <input type="text" id="textInput" value={selectedMilkAmount}/>
        <button>Order</button>
      </div>
    </main>

  )
}

export default Product