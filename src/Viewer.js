import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ViewerJs from 'viewerjs';

const propTypes = {
    ready:PropTypes.func,
    show:PropTypes.func,
    shown:PropTypes.func,
    hide:PropTypes.func,
    hidden:PropTypes.func,
    view:PropTypes.func,
    viewed:PropTypes.func,
    zoom:PropTypes.func,
    zoomed:PropTypes.func,
};
const defaultProps = {
    ready:()=>{},
    show:()=>{},
    shown:()=>{},
    hide:()=>{},
    hidden:()=>{},
    view:()=>{},
    viewed:()=>{},
    zoom:()=>{},
    zoomed:()=>{}
};

class Viewer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.viewerCase = new ViewerJs(ReactDOM.findDOMNode(this.refs.views),{
            url: 'data-original',
            ...this.props
        })
    }
    componentWillUnmount(){
        this.viewerCase.destroy()
    }
    render () {
        return (
            <div>
                {
                    React.cloneElement(this.props.children,{
                        ref:'views'
                    })
                }
            </div>
        )
    }
};

Viewer.propTypes = propTypes;
Viewer.defaultProps = defaultProps;

export default Viewer;