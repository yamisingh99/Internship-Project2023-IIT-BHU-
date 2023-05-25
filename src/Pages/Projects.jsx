import React from "react";
import { Jsme } from 'jsme-react'



const Projects = () => {
  return (
   <div>
        <Jsme
          width="500px"
          height="400px"
          options={{
            // JSME options can be provided here
            // For example:
            options: 'star'
          }}
          onChange={(jsme) => {
            // Handle JSME structure change
            console.log('JSME structure:', jsme);
          }}
        />
      </div>

  );
};

export default Projects;
