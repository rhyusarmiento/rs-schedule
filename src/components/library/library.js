import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import LibraryCourse from './libraryCourse';


class Library extends Component {
    
    componentWillMount() {
        this.props.fetchCourses()
    }
    
    renderCourses() {
        const data = this.props.courses
        let tracker = 0;
        this.props.courses.forEach(course => {
            if(course.enrolled === true) {
                tracker++;
            }
        })
        if (tracker >= 5) {
            this.props.courses.forEach(course => {
                course.limitReached = true;
            })
        } else {
            this.props.courses.forEach(course => {
                course.limitReached = false;
            })
        }
        return data.map((course, index) => {
            return <LibraryCourse {...course} key={index} />
        })
    }
    
    render() {
        //console.log(this.props.courses)
        return (
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                { this.renderCourses() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, actions)(Library);