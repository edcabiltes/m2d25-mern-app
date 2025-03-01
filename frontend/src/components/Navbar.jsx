import { Link } from "react-router-dom";
import { pageData } from "./pageData";


export default function Navbar() {
  return (
    <div className="navbar">
        {pageData.map((page) => {
          return (
            <Link to={page.path} className="navItem">
                <button >{page.name}</button>    
            </Link>
            )
        })}
    </div>
  )
}
