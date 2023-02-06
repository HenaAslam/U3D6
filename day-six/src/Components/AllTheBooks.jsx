import { Component } from "react"
import { Container, Row, Col , Card,  Button } from "react-bootstrap"
import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'
import SingleBook from "./SingleBook"


 





class AllTheBooks extends Component{
    state={
        
        genre:"Fantasy",
        renderbook:fantasy,
        selectedBook:fantasy[0],
    }
    render(){
        return(
            
            <Container >
                <Container className="d-flex justify-content-around mb-4">

                     <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Fantasy",
                           renderbook:fantasy
                        })
                     }}>Fantasy</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"History",
                           renderbook:history
                        })
                     }}>History</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Horror",
                           renderbook:horror
                        })
                     }}>Horror</Button>

                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Romance",
                           renderbook:romance
                        })
                     }}>Romance</Button>
                      <Button variant="outline-dark" onClick={()=>{
                        this.setState({
                           genre:"Sci-Fi",
                           renderbook:scifi
                        })
                     }}>Sci-Fi</Button>
                   
                 
          
        
                </Container>
                    <h3>{this.state.genre}</h3>
                    <Row className="justify-content-center">
                    {
                       
                        this.state.renderbook.map((book)=>{
                            return(
                                <Col xs={4} sm={2} lg={1} key={book.asin} className="d-flex align-items-stretch mx-n3" onClick={()=>{
                                    this.setState({selectedBook:book,})
                                }}>
                                <Card>
                                    <Card.Img variant="top" src={book.img} className="image" />
                                </Card>
                                </Col>
                            )
                        })
                    }
                    
               
            </Row>
            <Container className="d-flex justify-content-center">
          
            <Row className="mt-4 justify-content-center single-card">
            <h3 className="small"><strong>Click one of the books to view! </strong></h3>
            <Col className="text-center " >

                <SingleBook CurrentBook={this.state.selectedBook}/>

            </Col>
            </Row>
            </Container>
        </Container>
        )
    }
    
   
}
export default AllTheBooks