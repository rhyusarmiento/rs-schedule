import { 
    FETCH_COURSES,
    TOGGLE_ENROLLED    
} from '../actions/types';

// eslint-disable-next-line
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:
            return [
                ...state,
                ...action.payload
            ]
        case TOGGLE_ENROLLED:
            const newCourses = state.map(course => {
                if(course.id === action.payload) {
                    course.enrolled = !course.enrolled
                }
                return course
            })
            return [
                ...newCourses
            ]
        default: 
            return state;
    }
}