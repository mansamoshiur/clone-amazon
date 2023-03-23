import React from 'react'
import Banner from '../components/home/Banner'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <Banner />
        <div className='w-full -mt-2 lgl:-mt-28'>
          <Products />
        </div>
    </div>
  )
}

export default Home