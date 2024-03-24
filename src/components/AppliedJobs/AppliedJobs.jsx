import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobApplications } from "../../Utilitys/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob"


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();

    useEffect(() => {
        if(!jobs){
            return
        }
        const arrayJobs=jobs || []
        const storedJobIds = getJobApplications();
        if (jobs) {
            const jobApplied = arrayJobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobApplied);
        }
    }, [jobs]);

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-extrabold">Applied Jobs</h1>
                <p className="font-medium my-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 justify-items-center">
                {
                    appliedJobs.map((appliedJob, idx) => <AppliedJob
                        key={idx}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;