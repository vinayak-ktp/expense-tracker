import React from 'react'
import ExpenseForm from './components/ExpenseForm'
import ItemsDisplay from './components/ItemsDisplay'
import ItemsContextProvider from '../contexts/ItemsContext'

const App = () => {
  return (
    <ItemsContextProvider>
      <main className='h-screen w-screen flex justify-center items-center max-sm:p-4'>
        <div className='h-9/12 w-9/12 bg-gray-100 rounded-4xl p-8 flex justify-between shadow-xl gap-8 border border-gray-200 max-sm:h-full max-sm:w-full max-sm:flex-col max-sm:rounded-lg max-md:p-3 max-sm:gap-4 max-md:rounded-lg max-md:gap-3 max-lg:gap-5 max-lg:p-6 max-lg:rounded-3xl'>
          <ExpenseForm />
          <div className='bg-gray-600 rounded-full w-2 max-sm:w-full max-sm:h-1'></div>
          <ItemsDisplay />
        </div>
      </main>
    </ItemsContextProvider>

  )
}

export default App