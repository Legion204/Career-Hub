import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FeaturedJob = ({ featuredJob }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = featuredJob;
    return (
        <div className="w-[648px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{job_title}</h2>
                    <p className="dark:text-gray-800">{company_name}</p>
                </div>
                <div className="flex gap-2">
                    <button className=" btn text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className=" btn text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-2">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <Link to={`/appliedJobs/${id}`}><button type="button" className=" m-5 p-3 font-semibold  rounded-md bg-[#7E90FE] text-white hover:bg-gray-400">View Details</button></Link>
        </div>
    );
};

FeaturedJob.propTypes={
    featuredJob:PropTypes.object
}

export default FeaturedJob;