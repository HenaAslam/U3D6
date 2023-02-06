import { Container, Row, Col} from 'react-bootstrap'

const Welcome=()=>{
return(
    <Container fluid>
        <Row className=' jumbotron justify-content-center'>
            <Col className='text-center mt-5' xs={12}  md={6}>
            <h1>EpiBooks</h1>
            <h4 style={{display:'inline-block'}}>Welcome dear readers!</h4>
            </Col>
        </Row>
    </Container>


)
}
export default Welcome