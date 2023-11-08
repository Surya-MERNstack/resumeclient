import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ user }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user._id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="user"
    >
      <ul type="none">
        <li>{user.degree}</li>
        <li>{user.college}</li>
        <li>{user.graduationDate}</li>
      </ul>
      <ul type="none">
        <li>{user.position}</li>
        <li>{user.company}</li>
        <li>{user.startDate}</li>
        <li>{user.endDate}</li>
        <li>{user.description}</li>
      </ul>
    </div>
  );
};

const App = () => {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedWorkExperience, setSelectedWorkExperience] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("white");

  const apiUrlEducation =
    "https://resumeserver-xq8z.onrender.com/resume/education";
  const apiUrlWorkExperience =
    "https://resumeserver-xq8z.onrender.com/resume/workexperience";

  useEffect(() => {
    // Fetch education data from the API

    axios
      .get(apiUrlEducation)
      .then((response) => {
        setEducation(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Education data:", error);
      });

    // Fetch work experience data from the API

    axios
      .get(apiUrlWorkExperience)
      .then((response) => {
        setWorkExperience(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Work Experience data:", error);
      });
  }, []);

  const onEducationDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    // Update the selected education based on drag and drop

    setSelectedEducation(education.find((item) => item._id === active.id));
    setEducation((education) => {
      const oldIndex = education.findIndex((item) => item._id === active.id);
      const newIndex = education.findIndex((item) => item._id === over.id);
      const updatedEducation = arrayMove(education, oldIndex, newIndex);
      return [...updatedEducation];
    });
  };

  const onWorkExperienceDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    // Update the selected work experience based on drag and drop
    setSelectedWorkExperience(
      workExperience.find((item) => item._id === active.id)
    );
    setWorkExperience((workExperience) => {
      const oldIndex = workExperience.findIndex(
        (item) => item._id === active.id
      );
      const newIndex = workExperience.findIndex((item) => item._id === over.id);
      const updatedWorkExperience = arrayMove(
        workExperience,
        oldIndex,
        newIndex
      );
      return [...updatedWorkExperience];
    });
  };

  // Update the background color based on user's choice
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="App">
      <div className="total_box">
        <div className="left-column">
          <div className="education" id="education">
            <u>
              <h3>Education</h3>
            </u>
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onEducationDragEnd}
            >
              <SortableContext
                items={education}
                strategy={verticalListSortingStrategy}
              >
                {education.map((item) => (
                  <SortableUser key={item._id} user={item} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
        <div className="A4-sheet">
          <div className="work-experience" id="work-experience">
            <u>
              <h3>Work Experience</h3>
            </u>
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={onWorkExperienceDragEnd}
            >
              <SortableContext
                items={workExperience}
                strategy={verticalListSortingStrategy}
              >
                {workExperience.map((item) => (
                  <SortableUser key={item._id} user={item} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
      <div className="total_A4">
        <u>
          <h2>Resume Builder</h2>
        </u>
        <span style={{ color: "red" }}>
          *swap the container it automatically chooses the Education and Work
          Experience*
        </span>
        {selectedEducation && (
          <div className="selected-education">
            <u>
              {" "}
              <h3>Selected Education</h3>
            </u>
            <SortableUser user={selectedEducation} />
          </div>
        )}
        {selectedWorkExperience && (
          <div
            className="selected-work-experience"
            style={{ backgroundColor: backgroundColor }}
          >
            <u>
              <h3>Selected Work Experience</h3>
            </u>

            <SortableUser user={selectedWorkExperience} />
          </div>
        )}
      </div>

      <div className="controls">
        <u>
          <h3>Color Option</h3>
        </u>
        <div>
          <label>
            <input
              type="checkbox"
              name="backgroundColor"
              value="white"
              checked={backgroundColor === "white"}
              onChange={() => handleColorChange("white")}
            />
            White
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="backgroundColor"
              value="lightgrey"
              checked={backgroundColor === "lightgrey"}
              onChange={() => handleColorChange("lightgrey")}
            />
            Light Grey
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="backgroundColor"
              value="lightblue"
              checked={backgroundColor === "lightblue"}
              onChange={() => handleColorChange("lightblue")}
            />
            Light Blue
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
