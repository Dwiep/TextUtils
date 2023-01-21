//rfc ==> react base componet 
/*import React from 'react'

export default function Navbar() {
  return (
    <div>
      
    </div>
  )
} */




import React from 'react'
//impt ==> import PropTypes from 'prop-types'
import PropTypes from 'prop-types'

//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Navbar from 'react-bootstrap/Navbar';



  export default function Navbar1(props) {
    
  return (
 

      <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
          <Container fluid>
          <Navbar.Brand className='ps-3'to="/"  style={{ fontWeight: "bold"}}><strong>{props.title}</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              
         
              
            
             
              <Form className={`d-flex position-absolute top-50 end-0 translate-middle text-${props.mode=== 'light'?'dark':'light'}`}>
                  <Form.Check 
                          type="switch"
                          id="custom-switch"
                          label="Enable DarkMode"
                          onClick={props.toggleMode}
                        />
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
  
  )
}

Navbar1.propTypes = {
  title: PropTypes.string.isRequired,
}
// pts ==> PropTypes.string

Navbar1.defaultProps = {
  title: 'Set title here'
}