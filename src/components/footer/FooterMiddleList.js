import React from 'react'

const FooterMiddleList = ({title,listItem}) => {
  return (
    <div className='w-full'>
         <h3 className='font-titleFont text-base text-whit font-semibold mb-3'>{title}</h3>
            <ul className='font-bodyFont flex flex-col gap-2'>
                {
                    listItem.map((item)=>item.listData.map((data,i)=>(
                        <li key={i} className='footerLink'>{data}</li>
                    )))
                }
            </ul>
    </div>
  )
}

export default FooterMiddleList