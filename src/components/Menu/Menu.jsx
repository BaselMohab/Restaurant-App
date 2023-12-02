import React, { useState } from 'react'
import MenuItems from './MenuItems'
import items from './Menu-Data'
import Categories from './Categories'


const allCategories = ['all', ... new Set(items.map((item) => item.category))]

const Menu = () => {
const [menuItems, setMenuItems] = useState(items)
const [categories, setCategories] = useState(allCategories)

const filterItem = (category) =>{
  if(category === 'all'){
    setMenuItems(items)
    return
  }
  let newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
}

return (
    <div>
      <Categories filterItem={filterItem} categories={categories} />
      <MenuItems menuItems={menuItems} />
    </div>
)
}
export default Menu
