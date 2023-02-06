
import { Component } from 'react'
import {Card , Badge} from 'react-bootstrap'
class SingleBook extends Component{
 
    render(){
        return(
            <Card>
                        <Card.Img variant="top" src={this.props.CurrentBook?.img} className="single-book"/>
                             <Card.Body>
                                        <Card.Title>{this.props.CurrentBook ? this.props.CurrentBook.title : ""}</Card.Title>
                                        <Card.Text>
                                        <Badge variant="danger">{this.props.CurrentBook?.price}</Badge>{' '}
                                    </Card.Text>
       
                            </Card.Body>
                    </Card>
        )
    }
    
}
export default SingleBook