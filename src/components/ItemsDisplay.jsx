import React, { useContext } from 'react'
import Item from './Item'
import { ItemsContext } from '../../contexts/ItemsContext';

const ItemsDisplay = () => {
  const { items } = useContext(ItemsContext);
  return (
    <div className='items-display flex flex-col gap-3 w-full bg-gray-100 rounded-2xl shadow-inset inset-7 p-3 overflow-scroll max-sm:h-full max-md:rounded-lg max-sm:shadow-none max-sm:p-2 max-md:gap-2'>
      {
        items.length > 0
          ?
          items.map(item => <Item key={item.id} id={item.id} category={item.category} amount={item.amount} title={item.title} />)
          :
          <div className='h-full flex justify-center items-center text-3xl text-gray-300 font-semibold max-md:text-2xl'>No Transactions</div>
      }
    </div>
  )
}

export default ItemsDisplay