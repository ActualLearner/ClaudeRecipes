import imgUrl from './assets/chef-claude-icon.png'

export default function Header() {
  return (
    <header>
        <img src={imgUrl} alt="Chef-Claude" />
        <h1>Claude Recipes</h1>
    </header>
  )
}