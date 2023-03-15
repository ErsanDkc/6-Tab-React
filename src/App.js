import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value,setValue] = useState(0)
  useEffect(() => {
    setLoading(true);
     axios("https://course-api.com/react-tabs-project")
      .then(res => setJob(res.data))
      .finally(() => setLoading(false));
    ;
  }, []);
    
  
  
  
  
  return (
    <>
      {loading && <h1>LOADING...</h1> }
      <div className="container">
        <div className="btn-container">
          {job?.map((company,index) => {
            return <button key={index}>{company.company}</button>
          })}
        </div>
        <div className="info-container">
          <h3>{job[value]?.title}</h3>
          <h5>{job[value]?.company}</h5>
          <h6>{job[value]?.dates}</h6>
          {job[value]?.duties.map((duty,index) =>  {
            return <p key={index}>{duty}</p>
          })}

        </div>
      </div>
    </>
  );
}

export default App;
