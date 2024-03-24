import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategoryList = () => {
    const [jobCategories,setJobCategories]=useState([]);


    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setJobCategories(data))
    },[])

    return (
        <div className="mt-24">
            <div className="text-center">
            <h1 className="text-5xl font-extrabold">Job Category List</h1>
            <p className="font-medium my-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 justify-items-center">
            {
                jobCategories.map((jobCategory,index)=><JobCategory 
                    key={index}
                    jobCategory={jobCategory}
                    ></JobCategory>)
            }
            </div>
        </div>
    );
};

export default JobCategoryList;