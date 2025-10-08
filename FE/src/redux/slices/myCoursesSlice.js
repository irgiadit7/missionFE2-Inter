import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('myCourses');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load my courses from local storage", e);
        return [];
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('myCourses', serializedState);
    } catch (e) {
        console.warn("Could not save my courses to local storage", e);
    }
};

const myCoursesSlice = createSlice({
    name: 'myCourses',
    initialState: {
        data: loadFromLocalStorage(),
    },
    reducers: {
        addCourses: (state, action) => {
            const newCourses = action.payload;
            newCourses.forEach(newCourse => {
                // Cek agar tidak ada duplikat kursus
                if (!state.data.some(course => course.id === newCourse.id)) {
                    state.data.push(newCourse);
                }
            });
            saveToLocalStorage(state.data);
        },
    },
});

export const { addCourses } = myCoursesSlice.actions;
export default myCoursesSlice.reducer;