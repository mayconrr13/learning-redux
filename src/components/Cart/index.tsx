import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

export const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
  
  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.amount}</td>
            <td>{(item.product.price * item.amount).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
