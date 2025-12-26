import React from 'react'

function Team() {
    return (
        <div className='container'>
         <div className='row '>
             <h2 className='fs-3 text-center'>People</h2>
             <div className='row p-5'>
              <div className='col-1'></div>
              <div className='col-5 text-center'>
                <img src='media/images/my.jpg' alt='CEO image' style={{borderRadius: "50%", width: "70%"}}/>
                <p className='fs-5 pt-3'>Mahendi Modi</p>
                <p className="text-muted" style={{fontSize: "15px"}}>Founder, CEO</p>
              </div>
              <div className='col-5 mt-4' style={{color: "	#686666ff"}}>
                <p style={{lineHeight: "1.65"}}>Mahendi bootstrapped and founded MetaStocks in 2025 to solve the challenges she experienced while building real-time, high-performance trading systems. She is also an active contributor to open-source trading infrastructure communities and frequently collaborates with fintech groups shaping the future of algorithmic trading in India.</p>

                <p style={{lineHeight: "1.65"}}>Today, MetaStocks is redefining how developers, traders and analysts interact with trading technology through its seamless architecture and intelligent automation tools.</p>

                <p style={{lineHeight: "1.65"}}>Designing systems and writing clean architecture code is her zen.</p>
              </div>
              <div className='col-1'></div>
             </div>

             {/* team members */}
             {/* row 1 */}
           <div className='row text-center' style={{paddingTop: "60px", paddingBottom: "70px"}}>
             
                  <div className='col'>
                 
                    <img src="media/images/p1.jpeg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "63%"}}/>
                  
                      <p className='fs-5 pt-3'>Venal Madhav</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>Co-Founder</p>
                
                  </div>
             

             
                   <div className='col'>
                 
                    <img src="media/images/p2.jpg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "60%"}}/>
                  
                      <p className='fs-5 pt-3'>Vimal Shah</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>CTO</p>
                                
              </div>
             

              <div className='col'>
                 
                    <img src="media/images/p3.jpg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "62%"}}/>
                  
                      <p className='fs-5 pt-3'>Rani Roy</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>Director</p>
                
                
              </div>
            </div>


          {/* row 2 */}
           <div className='row text-center' style={{paddingBottom: "150px"}}>
             
                  <div className='col'>
                 
                    <img src="media/images/p4.jpeg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "63%"}}/>
                  
                      <p className='fs-5 pt-3'>Shruti Kumari</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>Chief of Education</p>
                
                  </div>
             

             
                   <div className='col'>
                 
                    <img src="media/images/p5.jpg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "64%"}}/>
                  
                      <p className='fs-5 pt-3'>Kemu Lia</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>CCO</p>
                                
              </div>
             

              <div className='col'>
                 
                    <img src="media/images/p6.jpeg" class="card-img-top" alt="people" style={{borderRadius: "50%", width: "60%"}}/>
                  
                      <p className='fs-5 pt-3'>Dhruv Shah</p>
                      <p classname="text-muted" style={{fontSize: "15px"}}>Director Strategy</p>
                
                
              </div>
            </div>

          </div>

        </div>
      );
}

export default Team;