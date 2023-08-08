import React, { useContext } from 'react'
import { CategoryContext } from '../../contexts/category-selected-context'

export const Main = () => {
    const { categorySelected } = useContext(CategoryContext)

    return (
        <div className='d-flex justify-content-center  align-items-center ' style={{ background: '#888', height: '600px' }}>

            <p className='text-center'>se selecciono la categoria:<span style={{ background: 'yellow' }}>{categorySelected}</span></p >
        </div>
    )
}
