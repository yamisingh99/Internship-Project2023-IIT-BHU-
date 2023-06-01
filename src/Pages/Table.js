// import React from 'react'
// import "./Tabledesign.css";
// function Activitytable() {
//   return (
//     <div className="App">
//       <h1>Select prediction parameter</h1>
//       <table className="first">
//         <thead>
//           <tr>
//             <th>parameter</th>
//             <th>organism/cell</th>
//             <th>type</th>
//             <th>output</th>
//             <th>accuracy</th>
//             <th>reference</th>
//             <th>method</th>
//             <th>descriptor</th>
//             <th>updated at</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//             <td></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Activitytable;

import React from 'react';
import './Table.css';


const Table = ({ data }) => {
  return (
    <table className="my-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>JSME Structure</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.jsmeStructure}</td>
          </tr>
        ))}
      </tbody>
      
    </table>
    
    
  );
};

export default Table;



