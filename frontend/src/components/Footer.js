import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
          <Container>
            <Row>
              <Col className='text-center py-1'>Application image: <a href="https://hub.docker.com/u/riteshbenjwal">Docker Hub,</a> Copyright &copy; Proshop</Col>
            </Row>
           
          </Container> 
        </footer>
    )
}

export default Footer;