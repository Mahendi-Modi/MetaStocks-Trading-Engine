import React from 'react'

function Universe() {
    return (
        <div className='container text-center'>
          <div className='row'>
            <p className='pb-5' style={{fontSize: "20px"}}>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration: "none", color: "#6C5CE7"}}>MetaStocks.tech</a> blog.</p>
          </div>

          <h4 className='pb-3 fs-3'>The MetaStocks Universe</h4>
          <p>Extend your trading and investment experience even further with our partner platforms</p>

              {/* row 1 */}
           <div className='row text-center mx-5' style={{ marginLeft: "120px", marginRight: "120px"}}>
                  <div className='col-4 p-5'>
                 
                    <img src="media/images/fundHouse.jpeg" alt="fundHouse" style={{ width: "80%"}}/>
                    <p classname="text-muted" style={{fontSize: "14px", paddingTop: "10px", color: "#848484ff"}}>Our asset management venture
                      that is creating simple and transparent index
                      funds to help you save for your goals.</p>
                
                  </div>

              <div className='col-4' style={{padding: "48px"}}>
                 
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo" style={{ width: "95%"}}/>
                      <p classname="text-muted" style={{fontSize: "14px", paddingTop: "25px", color: "#848484ff"}}>Options trading platform that lets you  create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.
</p>
                
                  </div>

              <div className='col-4' style={{padding: "48px"}}>
                 
                    <img src="media/images/tijori.svg" alt="tijori" style={{ width: "60%"}}/>
                    <p classname="text-muted" style={{fontSize: "14px", paddingTop: "10px", color: "#848484ff"}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
                
                  </div>
            </div>




          {/* row 2 */}
    <div className='row text-center mx-5' style={{marginLeft: "120px", marginRight: "120px"}}>                 
                       <div className='col-4' style={{padding: "48px"}}>
                 
                    <img src="media/images/streakLogo.png" alt="streakLogo" style={{ width: "70%"}}/>
                    <p classname="text-muted" style={{fontSize: "14px", paddingTop: "10px", color: "#848484ff"}}>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                
                  </div>

              <div className='col-4' style={{padding: "48px"}}>
                 
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" style={{ width: "90%"}}/>
                      <p classname="text-muted" style={{fontSize: "14px", paddingTop: "10px", color: "#848484ff"}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
                
                  </div>

           <div className='col-4' style={{padding: "48px"}}>
                 
                    <img src="media/images/dittoLogo.png" alt="dittoLogo" style={{ width: "60%"}}/>
                    <p classname="text-muted" style={{fontSize: "14px", paddingTop: "10px", color: "#848484ff"}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                
                  </div>
            </div>
            <div style={{paddingBottom: "40px"}}>
         <button
          style={{
            width: "18%",
            margin: "auto",
            backgroundColor: "#6C5CE7",
            color: "white",
            borderRadius: "5px",
            border: "none",
        
          }}
          className="click-btn p-2 fs-5 mb-5" 
        >
          Signup for free
        </button>
</div>
        </div>
      );
}

export default Universe;