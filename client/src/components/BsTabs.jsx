import React from 'react';
import {Row,Tabs,Tab, Container} from 'react-bootstrap';

const BsTabs = (props) => {
  return (
    <>
      <Container className='py-4'>
        <Row className='justify-content-center'>
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className="bg-secondary rounded-circle mb-1 p-0">
              <Tab eventKey="tab-1" title="About" >
              
                                                <div className='row mt-2'>
                                                    <div className='col-md-6'><label className='about-label'>User ID</label></div>
                                                    <div className='col-md-6'><p className='about-p'>45356765567644</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Name</label></div>
                                                    <div className='col-md-6'><p className='about-p'>{props.name}</p></div>

                                                </div>
                                               
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Email</label></div>
                                                    <div className='col-md-6'><p className='about-p'>{props.email}</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>phone</label></div>
                                                    <div className='col-md-6'><p className='about-p'>{props.phone}</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Profession</label></div>
                                                    <div className='col-md-6'><p className='about-p'>{props.work}</p></div>

                                                </div>
                                                
                                                
                                      
                                            </Tab>



                                  <Tab eventKey="tab-2" title="timeline">             
                                       
                                                <div className='row mt-3'>
                                                    <div className='col-md-6'><label className='about-label'> ID</label></div>
                                                    <div className='col-md-6'><p className='about-p'>7675646</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Mayank</label></div>
                                                    <div className='col-md-6'><p className='about-p'>Gupta</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Mayank</label></div>
                                                    <div className='col-md-6'><p className='about-p'>Gupta</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Mayank</label></div>
                                                    <div className='col-md-6'><p className='about-p'>Gupta</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Mayank</label></div>
                                                    <div className='col-md-6'><p className='about-p'>Gupta</p></div>

                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-6'><label className='about-label'>Mayank</label></div>
                                                    <div className='col-md-6'><p className='about-p'>Gupta</p></div>

                                                </div>
                                                
                                                
                                                
                                            </Tab>
              
            </Tabs>
        </Row>

      </Container>
    </>
  )
}

export default BsTabs;
