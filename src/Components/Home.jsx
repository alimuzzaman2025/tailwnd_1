import React from 'react'
import  { Col, Container, Row }  from 'react-bootstrap'

const Home = () => {
  return <>
  <Container className='bg-amber-400 py-5'>
     <Row className='py-5'>
        <Col>
        <h6 className='uppercase text-center color-black'>sub-headline</h6>
        <h2 className='uppercase text-center color-black font-bold leading-[65px]'>a church that's relevant</h2>
        </Col>
     </Row>
  </Container>
  </>
}

export default Home