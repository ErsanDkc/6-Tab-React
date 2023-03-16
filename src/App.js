import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa"

function App() {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value,setValue] = useState(0)
  const getData = async() => {
    try {
      setLoading(true);
      const res = await axios("https://course-api.com/react-tabs-project")
      setJob(res.data)
     }
     catch(e) {
      console.log(e.message)
     }
     finally {
      setLoading(false);
     }
  }
  
  useEffect(() => {
    
    getData()
  
  }, []);
    
  const change = () =>  {
    
  }
  
  
  
  return (
    <main>
      {loading && <h1>LOADING...</h1> }
      <div className="container">
        <div className="btn-container">
          {job?.map((company,index) => {
            return <button onClick={change} key={index}>{company.company}</button>
          })}
        </div>
        <div className="info-container">
          <h3>{job[value]?.title}</h3>
          <h5>{job[value]?.company}</h5>
          <h6>{job[value]?.dates}</h6>
          {job[value]?.duties.map((duty,index) =>  {
            return <p className="info" key={index}><span><FaAngleDoubleRight className="icon"/></span>{duty}</p>
          })}

        </div>
      </div>
    </main>
  );
}

export default App;
