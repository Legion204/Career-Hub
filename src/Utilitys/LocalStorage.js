
const getJobApplications=()=>{
    const storedJobApplication = localStorage.getItem('job-applications')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];
}



const saveJobApplications=(id)=>{
    const storedJobApplications=getJobApplications()
    const exist= storedJobApplications.find(jobId=>jobId===id);
    if(!exist){
        storedJobApplications.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplications))
    }
}

export {saveJobApplications,getJobApplications}