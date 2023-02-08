import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar(){ 

    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            setScrollPos(window.scrollY)
        }
        window.addEventListener('scroll', updateScroll)

        updateScroll()
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    return (
        <header className={scrollPos > 0 ? 'frosted' : ''}>
            <div className='nav-container'>
                <Linky titleName='Haris // Raza.' to='/' className='navlink title' />
                <nav className="navlist"> 
                    <Linky titleName='About' to='/about' className='navlink' />
                    <Linky titleName='Projects' to='/projects' className='navlink'/>
                    <Linky titleName='Contact' to='/contact' className='navlink' /> 
                </nav>
            </div>
        </header>
    )
}

export function Linky({titleName, to, className, ...props}){

    const [isHover, setHover] = useState(false)

    if (isHover) {
        className += ' hovered'
    }

    return (
        <Link 
        to={to} 
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        >
            {titleName}
        </Link>
    )
}