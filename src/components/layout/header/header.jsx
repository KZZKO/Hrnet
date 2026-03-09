import { useLocation, useNavigate } from "react-router-dom"
import "./index.scss"

export const Header = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const navHome = () => {
        navigate("/")
    }

    return (
        <header className="header-section">
            {location.pathname === "/" ? (
                <button className="logo">
                    <i className="fa-solid fa-user-group"></i>
                    <h1><span>HR</span>net</h1>
                </button>
            ) : (
                <button className="backHome" onClick={navHome}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            )}
        </header>
    )
}