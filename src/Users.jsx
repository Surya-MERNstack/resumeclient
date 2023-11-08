// import { useState, useEffect } from "react";
// import "./users.css";
// import { closestCenter, DndContext } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import axios from "axios";

// const apiUrlEducation = "https://resumeserver-xq8z.onrender.com/resume/education";
// const apiUrlWorkExperience = "https://resumeserver-xq8z.onrender.com/resume/workexperience";

// const SortableUser = ({ user }) => {
//   // No changes here, it remains the same
// };

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [workExperienceColor, setWorkExperienceColor] = useState("white");

//   useEffect(() => {
//     // Fetch Education data from the API
//     axios
//       .get(apiUrlEducation)
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching Education data:", error);
//       });

//     // Fetch Work Experience data from the API
//     axios
//       .get(apiUrlWorkExperience)
//       .then((response) => {
//         // Assuming the API returns an object with a backgroundColor property
//         setWorkExperienceColor(response.data.backgroundColor);
//       })
//       .catch((error) => {
//         console.error("Error fetching Work Experience data:", error);
//       });
//   }, []);

//   const addUser = () => {
//     // No changes here, it remains the same
//   };

//   const onDragEnd = (event) => {
//     // No changes here, it remains the same
//   };

//   return (
//     <div className="users">
//       <div>Total: {users.length}</div>
//       <div className="users-form">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addUser}>Add user</button>
//       </div>
//       <div>
//         <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
//           <SortableContext items={users} strategy={verticalListSortingStrategy}>
//             {users.map((user) => (
//               <SortableUser key={user.id} user={user} />
//             ))}
//           </SortableContext>
//         </DndContext>
//       </div>
//       <div className="work-experience" style={{ background: workExperienceColor }}>
//         <h2>Work Experience</h2>
//         {users.map((user) => (
//           <div key={user.id}>{user.name}</div>
//         ))}
//       </div>
//       <div className="education">
//         <h2>Education</h2>
//         {users.map((user) => (
//           <div key={user.id}>{user.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Users;



import { useState } from "react";
import "./users.css";

// import { closestCenter, DndContext } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// const SortableUser = ({ user }) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({ id: user.id });
//   const style = {
//     transition,
//     transform: CSS.Transform.toString(transform),
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="user"
//     >
//       {user.name}
//     </div>
//   );
// };

// const Users = () => {
//   const [users, setUsers] = useState(data);
//   const [inputValue, setInputValue] = useState("");
//   const addUser = () => {
//     newUser = {
//       id: Date.now().toString(),
//       name: inputValue,
//     };
//     setInputValue("");
//     setUsers((users) => [...users, newUser]);
//   };

//   const onDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id === over.id) {
//       return;
//     }
//     setUsers((users) => {
//       const oldIndex = users.findIndex((user) => user.id === active.id);
//       const newIndex = users.findIndex((user) => user.id === over.id);
//       return arrayMove(users, oldIndex, newIndex);
//     });
//   };

//   return (
//     <div className="users">
//       <div>Total: {users.length}</div>
//       <div className="users-form">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addUser}>Add user</button>
//       </div>
//       <div>
//         <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
//           <SortableContext items={users} strategy={verticalListSortingStrategy}>
//             {users.map((user) => (
//               <SortableUser key={user.id} user={user} />
//             ))}
//           </SortableContext>
//         </DndContext>
//       </div>
//     </div>
//   );
// };
// export default Users;

// import React from 'react'
// // import Data from "./Data";

// const Users = () => {
//   return (
//     <div>
//       <Data/>
//     </div>
//   )
// }

// export default Users
