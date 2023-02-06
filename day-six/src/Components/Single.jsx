import { Component } from 'react'
import {Card , Col} from 'react-bootstrap'
// import CommentArea from './CommentArea'
class Single extends Component{
   
    state={
        selected:false,
       
    }
    render(){
        return(


             <Col xs={6} md={4} className= "mb-1" >
           
            <Card onClick={(e)=>{
                    
                this.setState({selected:!this.state.selected},
                    this.props.change(this.props.bookk)
                    
                    )
            }}
            
            style={{ border: this.state.selected ? "3px solid red" : "none" }}
            >
                    
                        <Card.Img variant="top" src={this.props.bookk?.img} />
                             <Card.Body>
                                        <Card.Title style={{'fontSize': "10px"}}>{this.props.bookk ? this.props.bookk.title : ""}</Card.Title>
    
       
                            </Card.Body>
                        
                         
                    </Card>
                     {/* {this.state.selected && (  <CommentArea id={this.props.bookk?.asin}/>)} */}
            
                    </Col>
               
                

                  
        )
    }
   
}
export default Single