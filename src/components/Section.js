
const Section = () =>{
 return (

    <div> 
        <section> 
            <div  className= "bg-light"style={{backgroundColor: "lightgray"}}>
                <div class="row">
                <div class="col"></div>
                <div class="col-5 m-2">
              
                    <div className="p-3 bg-white m-5 rounded-3 ">
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

    </div>
 )


}
export default Section