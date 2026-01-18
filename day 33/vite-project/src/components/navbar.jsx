import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/about">About</NavLink> |{" "}
      <NavLink to="/contact">Contact</NavLink> |{" "}
      <NavLink to="/user/10">User</NavLink>
    </nav>
  )
}

export default Navbar
