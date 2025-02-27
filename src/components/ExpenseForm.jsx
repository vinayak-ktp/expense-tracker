import React, { useContext } from 'react'
import { ItemsContext } from '../../contexts/ItemsContext';

const ExpenseForm = () => {
  const { items,
          setItems,
          formData,
          setFormData } = useContext(ItemsContext);

  const income = items.reduce((acc, item) => acc + (item.category === 'income' ? Number(item.amount) : 0), 0);
  const expense = items.reduce((acc, item) => acc + (item.category === 'income' ? 0 : Number(item.amount)), 0);

  const validateFormData = () => {
    return formData.title && formData.amount && formData.category;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormData();
    if (!isValid) return;
    setItems((prev) => [{ ...formData, id: crypto.randomUUID() }, ...prev]);
    setFormData({ title: '', amount: '', category: '' });
  }

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    });
  }

  return (
    <div className='flex flex-col w-4/12 max-sm:flex max-sm:w-full max-md:text-xs max-lg:w-5/12'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='item-input'>
          <label htmlFor="title">title</label>
          <input type="text" name='title' id='title' value={formData.title} placeholder='Enter Item' className='w-full' onChange={(e) => updateFormData(e)} />
        </div>
        <div className='price-dropdown-container flex gap-3 mt-4 max-sm:mt-2 max-lg:flex-col'>
          <div className='price-input grow   max-lg:w-full'>
            <label htmlFor="amount">amount</label>
            <input type="number" name='amount' id='amount' value={formData.amount} placeholder='Enter Amount' className='w-full' onChange={(e) => updateFormData(e)} />
          </div>
          <select name="category" id="category" value={formData.category} className='px-1 h-7 bg-gray-200 border-gray-400 self-end rounded-md text-sm text-gray-700 shadow outline-none max-lg:h-6 max-lg:w-full max-lg:mt-2' onChange={(e) => updateFormData(e)}>
            <option value="" hidden>Category</option>
            <option value="grocery">Grocery</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
            <option value="income">Income</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button className='h-7 w-full mt-8 rounded-md text-gray-600 bg-blue-200 shadow hover:bg-blue-300 max-lg:text-sm max-md:mt-4'>Add Item</button>
      </form>

      <div className='ml-1 mt-8 h-full flex flex-col justify-around max-sm:flex-row max-sm:justify-between max-sm:mt-4'>
        <div className='inc-exp-bal'>
          <p>income</p>
          <h1 className='text-green-600'>₹{income}</h1>
        </div>
        <div className='inc-exp-bal'>
          <p>expense</p>
          <h1 className='text-red-500'>₹{expense}</h1>
        </div>
        <div className='inc-exp-bal'>
          <p>balance</p>
          <h1 className='text-blue-400'>₹{income - expense}</h1>
        </div>
      </div>
    </div>
  )
}

export default ExpenseForm