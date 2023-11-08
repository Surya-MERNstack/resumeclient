// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Data = () => {
//   const [education, setEducation] = useState([]);
//   const [workExperience, setWorkExperience] = useState([]);

//   useEffect(() => {
//     axios.get('https://resumeserver-xq8z.onrender.com/resume/education')
//       .then((res) => setEducation(res.data))
//       .catch((err) => console.error("Error fetching education:", err));
//   }, []);

//   useEffect(() => {
//     axios.get('https://resumeserver-xq8z.onrender.com/resume/workexperience')
//       .then((res) => setWorkExperience(res.data))
//       .catch((err) => console.error("Error fetching work experience:", err));
//   }, []);

//   console.log(education);
//   console.log(workExperience);

//   return (
//     <>
//     <div>
//       <h2>Education:</h2>
//       {
//         education.map((items, index) => (
//           <ul key={index} type = "none">
//             <li>
//               {items.college}
//             </li>
//             <li>
//               {items.degree}
//             </li>
//             <li>
//               {items.graduationDate}
//             </li>
//             <li>
//               {items.location}
//             </li>
//           </ul>
//         ))
//       }

//       <h2>Work Experience</h2>
//       {
//         workExperience.map((item, index) => (
//           <ul key={index} type="none">
//             <li>{item.position}</li>
//             <li>{item.company}</li>
//             <li>{item.location}</li>
//             <li>{item.startDate}</li>
//             <li>{item.endDate}</li>
//             <li>{item.endDate}</li>
//           </ul>
//         ))
//       }
//     </div>
//     </>
//   );
// }

// export default Data;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { DndContext } from "@dnd-kit/core";
// import { Droppable } from "./Drags/Droppable";
// import { Draggable } from "./Drags/Draggable";


// const Data = () => {
//   const [education, setEducation] = useState([]);
//   const [workExperience, setWorkExperience] = useState([]);
//   const [parent, setParent] = useState(null);
//   const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

//   useEffect(() => {
//     axios
//       .get("https://resumeserver-xq8z.onrender.com/resume/education")
//       .then((res) => setEducation(res.data))
//       .catch((err) => console.error("Error fetching education:", err));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://resumeserver-xq8z.onrender.com/resume/workexperience")
//       .then((res) => setWorkExperience(res.data))
//       .catch((err) => console.error("Error fetching work experience:", err));
//   }, []);

//   const SortableItem = ({ item }) => {
//     const { attributes, listeners, setNodeRef, transform, transition } =
//       useSortable({
//         id: item.position,
//       });

//     const style = {
//       transition,
//       transform: CSS.Transform.toString(transform),
//     };

//     return (
//       <DndContext onDragEnd={handleDragEnd}>
//       {!parent ? draggable : null}
//       <Droppable id="droppable">
//         {parent === "droppable" ? draggable : 'Drop here'}
//       </Droppable>
//     </DndContext>
//   );

//   };

//   function handleDragEnd({over}) {
//     setParent(over ? over.id : null);
//   }
// };

// export default Data;


