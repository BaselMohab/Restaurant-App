import React from 'react'


const MenuItems = ({menuItems}) => {
return (
    <div className='section-center'>
    {menuItems.map((menuItem) => {
        const {id, title, price, img, desc} = menuItem
    return (
        <article key={id} className='menu-item'>
            <img src={img} alt={title} className='image' />
            <div className='info'>
                <header>
                    <h4 className='info-title'>{title}</h4>
                    <h4 className='price'>${price}</h4>
                </header> 
                    <p className='desc'>{desc}</p>                       
            </div>   
        </article>
        )
    })}
    </div>
)
}

export default MenuItems
