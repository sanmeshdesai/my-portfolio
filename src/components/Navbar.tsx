import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex gap-6">
        <Link href='/'>Home</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar