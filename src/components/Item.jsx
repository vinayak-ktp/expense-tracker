import React, { useContext } from 'react'
import { ItemsContext } from '../../contexts/ItemsContext';

const Item = ({ id, category, amount, title }) => {
  const isIncome = category === 'income';
  const {setItems, setFormData} = useContext(ItemsContext);

  const handleDelete = () => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  const handleEdit = () => {
    handleDelete();
    setFormData({id, category, amount, title});
  }

  return (
    <div className='w-full flex justify-between px-4 py-2 shadow rounded-lg border-t border-gray-300 max-sm:text-sm max-sm:rounded-md'>
      <div>
        <h4 className='text-sm text-gray-500 max-sm:text-xs'>{category}</h4>
        <p className='font-semibold'>{title}</p>
        <h2 className={(isIncome ? ' text-green-600 ' : ' text-red-500 ') + 'text-xl font-bold max-sm:text-base'}>
          {(isIncome ? '+ ' : '- ') + '₹' + amount}
        </h2>
      </div>
      <div className='text-2xl flex flex-col gap max-sm:text-lg'>
        <button onClick={() => handleDelete()} className='edit-delete-btn hover:text-red-500 max-sm:text-red-600'><i className="ri-delete-bin-5-fill  "></i></button>
        <button onClick={() => handleEdit()} className='edit-delete-btn hover:text-blue-500 max-sm:text-blue-500'><i className="ri-edit-fill"></i></button>
      </div>
    </div>
  )
}

export default Item