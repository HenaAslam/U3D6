import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

import Single from './Single'
import { Row, Container , Form, Col, Button} from 'react-bootstrap'
import { Component } from 'react'
import CommentAreaRight from './CommentAreaRight'


class BookList extends Component{
    state={
        search:'',
        genre:"Fantasy",
        renderbook:fantasy,
       
        current:""
        
    }
  
    changeBookSelected = (newSelectOption) => {
      this.setState({
         current: newSelectOption,
      })
    }
    render(){
        
        

        return(
          
            <Container className=" mb-5 mt-5">
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                    <Form>
            <Form.Group >
              
              <Form.Control type="text" placeholder="Search" value={this.state.search} onChange={(e)=>{
                this.setState({search:e.target.value})
          
                
              }}/>
            
            </Form.Group>
          
              
          </Form>
                    </Col>
                </Row>
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
                    <Row className="mt-4 ">
                    
                     <Col xs={9}>
                        <Row>
                     {
       
       this.state.renderbook.filter((b)=>
               b.title.toLowerCase().includes(this.state.search)
       )
       .map((b)=>
       <Single bookk={b} key={b.asin}  change={this.changeBookSelected} bookTitleProp={this.state.current}/>
       
       )
       }
       </Row>

                   </Col>
                 
                     <Col xs={3}  className="comments sticky-top pt-5 pb-5 " >
                   
                        <h5>{this.state.current.title}</h5>

                  {this.state.current  !== "" ? (<><CommentAreaRight   id={this.state.current.asin}/></>) : (<div>Select a book to view comments</div>)}
                      </Col>
   

                         </Row>
                    </Container>
        )
    }
    

}
export default BookList

