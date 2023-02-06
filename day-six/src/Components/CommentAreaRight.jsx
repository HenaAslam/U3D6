import { Component } from "react";
import { ListGroup , Button, Spinner} from "react-bootstrap";
import AddComment from './AddComment'


class CommentAreaRight extends Component{
    state={
        comments:[],
        
        isLoading:true,
    }

    fetchComments=async()=>{
                try{
                   
                    let response=await fetch (" https://striveschool-api.herokuapp.com/api/comments/"+this.props.id,{headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"     }} )
                    if(response.ok){
                        let data=await response.json()
                      
                        this.setState({
                            comments:data,
                            isLoading:false
                        
                        })
                    }
                    else{
                        this.setState({
                            isLoading:false})
                       
                    }
                   
                }
                catch(error){
                    this.setState({isLoading:false})
                  
                    
                }
            }
     deleteComment = async (id) => {
                let res = await fetch(
                  "https://striveschool-api.herokuapp.com/api/comments/" + id,
            
                  {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNTdlM2U3MzczODAwMTUzNzQ2YjMiLCJpYXQiOjE2NzU2OTQxMjEsImV4cCI6MTY3NjkwMzcyMX0.XCiJNQtp5rz9kE16LIrlcsAouLOCn8m62yszme1VQ6Q"  ,
                    },
                  }
                );
               console.log(res)
              };
    componentDidMount=()=>{
        
        this.fetchComments()
    }
    componentDidUpdate=(PrevProps, PrevState)=>{
        if(PrevProps.id !== this.props.id){
            this.setState({isLoading:true})
            this.fetchComments()
        }

    }
render(){
  
    return(
       
<>
{this.state.isLoading &&   ( <div className="d-flex justify-content-center"><Spinner animation="border" variant="secondary"  /></div>)}
{this.state.comments.length=== 0 ? (<div>Be the first one to comment!</div>) : (<ListGroup>
         
  
   
         {this.state.comments.map((c)=>{
            
             return     <ListGroup.Item className="small" key={c._id}>{c.comment} | Rating : {c.rate} 
             <Button variant="outline-danger" size="sm" className="ml-2" onClick={(e) => {
                  e.preventDefault()
                  this.deleteComment(c._id);
                  
                }}>X</Button>
          
             </ListGroup.Item>
          })}
     
   
</ListGroup>)}

<AddComment id={this.props.id}  />   
</>
 
    )
}
}
export default CommentAreaRight