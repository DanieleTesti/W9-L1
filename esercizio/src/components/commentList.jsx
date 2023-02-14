import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.commentiM.map((com) => (
          <SingleComment commento={com} key={com._id} />
        ))}
      </>
    );
  }
}
export default CommentList;
