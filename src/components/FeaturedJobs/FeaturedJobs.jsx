
import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, []);

    return (
        <div className="mt-24">
            <div className="text-center">
            <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
            <p className="font-medium my-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 justify-items-center gap-5">
                {
                    featuredJobs.map((featuredJob, index) => <FeaturedJob
                        key={index}
                        featuredJob={featuredJob}
                    ></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;