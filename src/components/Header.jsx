import imgUrl from '../assets/chef-gemini-icon.png'

export default function Header() {
  return (
    <header>
        <img src={imgUrl} alt="Chef-Gemini" />
        <h1>Recipe Generator</h1>
    </header>
  )
}