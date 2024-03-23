import React, { useEffect, useState } from 'react';
import Jobs from '../job/Jobs';

const FeaturedJobs = () => {
    const [jobs , setJobs] =useState([]);
    // this is not the best way to show all daata

    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
    fetch('jobs.json')
    .then(res=> res.json())
    .then(data => setJobs(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center'>Featured Jobs : {jobs.length}</h2>
            <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,dataLength).map(job=> <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={()=> setDataLength(jobs.length)}
                className='btn btn-primary mt-4'>Show all jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;