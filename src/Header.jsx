import React from 'react'
import imgUrl from './assets/chef-claude-icon.png'

function Header() {
  return (
    <header>
        <img src={imgUrl} alt="Chef-Claude" />
        <h1>Claude Recipes</h1>
    </header>
  )
}

export default Header