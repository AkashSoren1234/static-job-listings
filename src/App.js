import Container from "./components/container/container";
import Header from "./components/header/header";
import JobsContainer from "./components/jobs_container/jobs_container";
import Filter from "./components/filter_section/filter";
import React, { useEffect, useState } from "react";
// import { useCallback } from "react";
import data from "../src/data.json";

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterList, updateFilterList] = useState([]);
  const [jobs, updateJobs] = useState(data);

  const SkillButtonClick = (event) => {
    let skillname = event.target.textContent;
    if (!filterList.includes(skillname)) {
      updateFilterList([...filterList, skillname]);
    }
    setShowFilter(true);
  };

  const CloseFilter = () => {
    setShowFilter(false);
    updateFilterList([]);
  };

  const SelectedSkill = (event) => {
    const skill = event.target.id;
    const updatedFilterList = filterList.filter((value) => value !== skill);
    updateFilterList(updatedFilterList);
    if (updatedFilterList.length === 0) {
      CloseFilter();
    }
  };

  const jobsBySkills = (skilllist) => {
    if (skilllist.length === 0) {
      return data;
    } else {
      const filteredJobs = jobs.filter((item) => {
        const skills = skilllist.some((value) =>
          item.languages.includes(value)
        );
        return skills === true;
      });
      return filteredJobs;
    }
  };

  const displayData = () => {
    updateJobs(jobsBySkills(filterList));
  };

  useEffect(() => {
    displayData();
  }, [filterList]);

  return (
    <Container>
      <Header />
      {showFilter && (
        <Filter
          onClose={CloseFilter}
          skillList={filterList}
          getSkill={SelectedSkill}
        />
      )}
      <JobsContainer onClick={SkillButtonClick} showJobs={jobs} />
    </Container>
  );
}

export default App;



 // useEffect(() => {
  //   const jobsBySkills = (skilllist) => {
  //     if (skilllist.length === 0) {
  //       updateJobs(data);
  //     } else {
  //       const filteredJobs = jobs.filter((item) => {
  //         const skills = skilllist.some((value) =>
  //           item.languages.includes(value)
  //         );
  //         return skills === true;
  //       });
  //       updateJobs(filteredJobs);
  //     }
  //   };
  //   jobsBySkills(filterList);
  // },[filterList, jobs])

  // const jobsBySkills = useCallback(
  //   (skilllist) => {
  //     if (skilllist.length === 0) {
  //       updateJobs(data);
  //     } else {
  //       const filteredJobs = jobs.filter((item) => {
  //         const skills = skilllist.some((value) =>
  //           item.languages.includes(value)
  //         );
  //         return skills === true;
  //       });
  //       updateJobs(filteredJobs);
  //     }
  //   },
  //   [jobs]
  // );

  // useEffect(() => {
  //   jobsBySkills(filterList);
  // }, [filterList, jobsBySkills]);
