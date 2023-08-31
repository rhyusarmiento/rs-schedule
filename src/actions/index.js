import { 
    FETCH_COURSES,
    TOGGLE_ENROLLED
} from './types';

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    }
}


export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Course 1",
                description: "many dogs have cats",
                enrolled: false,
                limitReached: false
            },
            {
                id: 1,
                title: "Course 2",
                description: "many dogs have catsmany dogs have cats",
                enrolled: false,
                limitReached: false
            },
            {
                id: 2,
                title: "Course 3",
                description: "many dogs have catsmany dogs have catsmany dogs have cats",
                enrolled: false,
                limitReached: false
            },
            {
                id: 3,
                title: 'Course 4',
                description: 'many dogs have catsmany dogs have catsmany dogs have catsmany dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
            {
                id: 4,
                title: 'Course 5',
                description: 'many dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
            {
                id: 5,
                title: 'Course 6',
                description: 'many dogs have catsmany dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
            {
                id: 6,
                title: 'Course 7',
                description: 'many dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
            {
                id: 7,
                title: 'Course 8',
                description: 'many dogs have catsmany dogs have catsmany dogs have catsmany dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
            {
                id: 8,
                title: 'Course 9',
                description: 'many dogs have catsmany dogs have catsmany dogs have catsmany dogs have catsmany dogs have cats',
                enrolled: false,
                limitReached: false
            },
        ]
    }
}