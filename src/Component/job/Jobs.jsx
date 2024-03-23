
import { FaLocationDot ,FaDollarSign} from "react-icons/fa6";
const Jobs = ({ job }) => {
    const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                   <button className="px-5 py-2 font-extrabold border rounded border-purple-200">{remote_or_onsite}</button> 
                   <button className="px-5 py-2 font-extrabold border rounded border-purple-200text-green-300">{job_type}</button>
                </div>
                <div className="mt-4 flex mr-4">
                    <h2 className="flex"><FaLocationDot className="text-2xl mr-2"></FaLocationDot>{location}</h2>
                    <h2 className="flex">
                   <FaDollarSign className="text-2xl mr-2"></FaDollarSign>{salary}
                   </h2>
                   
                </div>
               
                <div class="card-actions justify">
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;