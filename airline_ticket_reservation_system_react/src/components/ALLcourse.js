import React, { useState, useEffect } from "react";
import Course from './Course'
import axios from "axios";

import { toast } from "react-toastify";

const Allcourse = () => {

    const getAllCourse = () => {
        axios.get(`http://localhost:3001/course`).then(
            (response) => {
                console.log(response.data.title);
                var data = JSON.stringify(response.data);
                toast.success(data);
                setCourses(response.data);
                console.log(response.data);
                
            },
            (error) => {
                console.log(error);
            }
        )
    }
    useEffect(() => {
        getAllCourse();
    }, [])
    /* ------------------------------ */
    const [courses, setCourses] = useState([])
    /* ------------------------------ */
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
    
    /* ------------------------------------------ */
    
    return (

        <div>
            <h2>  All courses</h2>
            <p>List of courses::</p>
            {
                courses.length > 0 ?
                    courses.map((item) => 

                        <Course key={item.id} course={item} update={updateCourse} />


                    )
                    : "NO courses available"
            }


        </div>

    )

}
export default Allcourse;