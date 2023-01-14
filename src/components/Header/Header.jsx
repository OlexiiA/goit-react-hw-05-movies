import { NavLink } from "react-router-dom"


const headerItems = [
    { to: "/", title: "Home" },
    { to: "/movies", title: "Movies" },
]



export const Header = () => {
    return <nav>
        <ul>
            {headerItems.map(e => <li key={e.title}>
<NavLink to={e.to}>{e.title}</NavLink>
            </li>)}
        </ul>
    </nav>
}