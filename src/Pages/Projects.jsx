import React, { useState } from 'react';
import { Jsme } from 'jsme-react';
import Table from './Table';



const Projects = () => {
  const [jsmeStructure, setJsmeStructure] = useState('');
  const [data, setData] = useState([]);

  const addToTable = () => {
    const newData = {
      id: Date.now(),
      jsmeStructure: jsmeStructure,
    };

    setData(prevData => prevData.concat(newData));
  };

  return (
    <div>
      <Jsme
        width="800px"
        height="400px"
        options={{
          // JSME options can be provided here
          // For example:
          options: 'star',
        }}
        onChange={jsme => {
          setJsmeStructure(jsme);
        }}
      />
      <button onClick={addToTable}>Add</button>
      <Table data={data} />
      

    </div>
    
  );
};

export default Projects;
