import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    handlerSubmit = e => {
        e.preventDefault();
        const {title} = this.state;

        if(!title.trim())  return;

        const newPost = {
            title, id: Date.now().toString()
        };

        this.props.createPost(newPost);
        this.setState({
            title: ''
        });

    };
    changeInputHandler = e => {
        e.persist();
        this.setState(prev => ({
            ...prev,
            ...{
                [e.target.name]: e.target.value
            }
        }))
    };

    render() {
        const {
            title
        } = this.state;
        return (
            <form onSubmit={this.handlerSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={title}
                        onChange={this.changeInputHandler}
                        placeholder="Введите заголовок"/>

                </div>
                <button type="submit" className="btn btn-primary">Создать</button>
            </form>

        )
    }
};
const mapDispatchToProps = {
    createPost
};
export default connect(null,mapDispatchToProps)(PostForm);
