import React from "react";
import {connect} from "react-redux";
import {fetchPost} from '../actions/actionCreators.js';

class Posts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:5000/api/members")
//       .then((res) => res.json())
//       .then((response) => this.setState({ posts: response }));
//   }

static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.lastPost && nextProps.lastPost.name){
        return {posts : nextProps.posts.unshift(nextProps.lastPost)};
    }
}

componentDidMount(){
    this.props.fetchPost();
}
  render() {
    const postitems = this.props.posts.map((eachPost) => {
      return (
        <div>
          <h3>{eachPost.name}</h3>
          <p>{eachPost.desc}</p>
        </div>
      );
    });
    return (
      <div>
        <h1>Harry Potter Characters</h1>
        {postitems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    posts: state.posts.characters,
    lastPost: state.posts.lastCharacter
});


export default connect(mapStateToProps, {fetchPost})(Posts);
