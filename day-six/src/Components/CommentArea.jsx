import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component{
    render(){
        return(
            <>
             <CommentList id={this.props.id} />
            <AddComment id={this.props.id} />
            </>
           
        )
    }
}
export default CommentArea