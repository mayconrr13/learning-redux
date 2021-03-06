import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/modules/cart/actions'
import { IProduct } from '../../store/modules/cart/types'

interface CatalogItemsProps {
  product: IProduct
}

export const CatalogItem = ({ product }: CatalogItemsProps) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])

  return (
    <article key={product.id} >
      <strong>{product.title}</strong>{" - "}
      <span>{product.price}</span>{"   "}
      <button
      type="button"
      onClick={handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  )
}
