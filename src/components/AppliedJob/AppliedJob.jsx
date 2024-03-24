import PropTypes from 'prop-types';

const AppliedJob = ({appliedJob}) => {
    const {job_title,job_description}=appliedJob;
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{job_title}</h2>
            </div>
            <p className="dark:text-gray-800">{job_description}</p>
        </div>
    );
};

AppliedJob.propTypes={
    appliedJob:PropTypes.object
}

export default AppliedJob;