import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../actions/actionCreators.js';

class PostForms extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            desc: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();    
        const chars = {
            name: this.state.name,
            desc: this.state.desc,
            id: "7"
        }
        this.props.createPost(chars);
        
    }

    render(){
        return(
            <div>
                <p>
                    Add Character
                </p>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Name: </label> <br/>
                        <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <br/>
                    <div>
                        <label> Desc: </label> <br/>
                        <textarea type="text" name="desc" onChange={this.onChange} value={this.state.desc}/>
                    </div>
                    <br/>
                    <button type="submit">
                        submit
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.characters,
    lastPost: state.posts.lastCharacter
});


export default connect(mapStateToProps,{createPost})(PostForms);