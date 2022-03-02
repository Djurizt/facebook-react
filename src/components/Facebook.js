import Logo from "./Logo.svg" // I'm trying to import logo but I did'nt get it
function Facebook (){ 

   return(
    <div>
             <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a  href className="navbar-brand text-primary fs-4 fw-bold h6">facebook</a>
                    <form className="d-flex">
                    <input className=" me-2 rounded-3 " type ="text" placeholder="Email or Phone" />
                    <input className=" me-2 rounded-3" type ="password" placeholder="Password"/>
                    <button className="btn btn-primary me-2 rounded-3" type="submit">Log In</button>
                    <a href className="text-primary text-decoration-none mt-2 me-4">Forgotten account?</a>
                    
                    </form>
                </div>
               </nav>
      <section> 
        <div style={{backgroundColor: "lightgray"}}>
          <div class="row">
            <div class="col"></div>
            <div class="col-5 m-2">
              
                    <div className="p-3 bg-light m-5 rounded-3 ">
                        <h4>Find Your Account</h4> <hr/> 
                        <p>Please enter your email address or mobile number to search for your account</p>
                        <input className="form-control me-2 " placeholder="Email address or mobile number" /> <hr/>
                        <div className="d-flex">
                          <button className="btn btn-md px-3 btn-secondary me-2 mx-auto" type="submit">Cancel</button>
                          <button className="btn btn-md px-3 btn-primary " type="submit">Search</button>
                        </div>
                    </div>
            </div>
            <div class="col">  </div>
          </div>
        </div>
      </section> 
    
        <div style={{height:"200px"}}></div>
    
        <div className="container" style={{padding:"0px 0px 0px 100px"}} >
               {/* <p> English (UK) Hausa Français (France) Português (Brasil)
                  Espanol العربية Bahasa Indonesia Deutsch 日本語 Italiano हिन्दी
               </p> */}  
                  <ul class="list-inline fs-6" style={{fontFamily:"Helvetica"}}>
                    <li class="list-inline-item text-secondary">English(UK)</li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Hausa</a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Français (France)</a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Português (Brasil) </a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Espanol</a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">العربية</a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Bahasa </a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Indonesia</a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Deutsch </a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">日本語 </a></li>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Italiano </a></li>
                     <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">हिन्दी </a></li>
                     <logo/>
                    <li class="list-inline-item"> 
                    
                    <img src= {Logo} alt="" />
                      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"      class="bi bi-plus-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                      </svg> */}
                    </li>
                  </ul> <hr /> 
                    {/* style={{width:"85%"}} */}
                    <ul class="list-inline font-monospace">
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Sign Up</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Log In</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Messanger</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Facebook Lite</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Watch</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Places</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Games</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Marketplace</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Facebook Pay</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Oculus</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Portal</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Instagram</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Bulletin</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Local</a></li>
                    <br/>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Fundraisers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Services </a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Voting Information Centre</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Groups</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">About</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Create Ad</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Create Page</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Developers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Careers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Privacy</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Cookies </a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">AdChoices</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Terms</a></li>
                    <br/>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Help</a></li>
                    </ul>
    
                    <br/>
                    
                    <p className="text-secondary">Meta &copy; 2022</p>
    
        </div>
    
      
    </div>
    
  )
    
   
}
    
    export default Facebook