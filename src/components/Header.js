function Header () {
 return(
     <div> 
        <nav className="navbar navbar-light">
    <div className="container-fluid">
     <a  href className="navbar-brand text-primary fs-4 fw-bold h6">facebook</a>
     <form className="d-flex">
     <input className=" me-2 border ps-2 rounded-3" type ="text" placeholder="Email or Phone" />
     <input className=" me-2 border ps-2 rounded-3" type ="password" placeholder="Password"/>
     <button className="btn btn-primary me-2 rounded-3" type="submit">Log In</button>
     <a href className="text-primary text-decoration-none mt-2 me-4">Forgotten account?</a>
     
     </form>
    </div>
        </nav>
    </div>
 )
}

export default Header
