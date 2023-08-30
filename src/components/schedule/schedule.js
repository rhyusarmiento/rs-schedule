import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScheduleCourse from './scheduleCourse';
import Gradient from '../gradient';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
    
    renderCourses() {
        const data = this.props.courses
        
        return data.map((course, index) => {
            if(course.enrolled && this.amountEnrolled != 5) {
                this.amountEnrolled++;
                return <ScheduleCourse {...course} key={index}/>
            }
        })
    }
    
    render() {
        this.amountEnrolled = 0
        return (
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                
                <ProgressTracker amountPossible={5} amountEnrolled={this.amountEnrolled}/>
                { this.renderCourses() }
                <Gradient />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(Schedule);