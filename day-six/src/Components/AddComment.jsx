import { Component } from "react";
import { Form, Button ,Alert} from "react-bootstrap";

class AddComment extends Component{
    state={
        done:false,
        commentObject:{
                    comment: "",
                    rate: "",
                     elementId: this.props.id,
                },
    }

 
    sendComment=async()=>{

      console.log(this.state.commentObject)
    
        let res=await fetch("https://striveschool-api.herokuapp.com/api/comments/",{
            method:'POST',
            body:JSON.stringify(this.state.commentObject),
            headers:{
                'Content-Type' : 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzUzMzkzOTEsImV4cCI6MTY3NjU0ODk5MX0.E3m_mPnlfAunzuI_mq8omy-G0FIO0pqc-fgXDp1vONY",
            },
        })
        if(res.ok){
            this.setState({done:true})
        }
    }
// componentDidMount(){
//     this.setState({
//         commentObject:{
//             ...this.state.commentObject,
//             elementId:this.props.id
//         }
//      })
// }

    render(){
        return(
            <>
             {this.state.done && (<Alert variant="success"> Comment added</Alert> ) }


<Form  className="d-flex flex-column justify-content-between align-items-center mb-2 mt-5" onSubmit={(e)=>{
    e.preventDefault()
   
    this.sendComment()
}}>
<Form.Group>
<Form.Label className="small">Comment</Form.Label>
<Form.Control type="text" placeholder="Enter comment" value={this.state.commentObject.comment} onChange={(e)=>{
this.setState({commentObject:{
...this.state.commentObject,
comment:e.target.value
}})
}} />
</Form.Group>
<Form.Group>
<Form.Label className="small">Rate the book</Form.Label>
<Form.Control as="select" value={this.state.commentObject.rate} onChange={(e)=>{
this.setState({commentObject:{
...this.state.commentObject,
rate:e.target.value
}})
}}>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</Form.Control>
</Form.Group>


<Button variant="primary" type="submit" >
Submit
</Button>
</Form>
            </>
           
        )
    }
}
export default AddComment