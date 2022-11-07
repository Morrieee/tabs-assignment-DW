import { useState, useEffect} from "react";
import Loading from './Loading';
import JobInfo from "./JobInfo";

function App(){

  const [loading, setLoading] = useState(true);
  const [Jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(0);

  const url = "https://course-api.com/react-tabs-project";

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();

    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  },[]);
  
  if(loading){
    return <Loading/>;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className = "btn-container">
          {Jobs.map((j, index) =>{ 
            return( 
              <button key = {j.id} className ={'job-btn ${index === jobIndex && "active-btn"}'}
              onClick = {() => setJobIndex(index)}>
                {j.company}
              </button>
            );
          })}
          </div>
          <JobInfo job = {Jobs[jobIndex]} /> 
      </div>
      <buton type= "button" className= "btn"> more info</buton>
    </section>
  );
}
export default App