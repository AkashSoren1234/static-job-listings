import classes from "./filter.module.css";

function Filter(props) {
  return (
    <main className={classes.filter}>
      <div className={classes.filtered_skills}>
        {props.skillList.length !== 0 &&
          props.skillList.map((skill) => (
            <div key={skill} id={skill} className={classes.filtered_skill}>
              {skill}{" "}
              <span
                onClick={props.getSkill}
                id={skill}
                className={classes.close}
              >
                X
              </span>
            </div>
          ))}
      </div>
      <div className={classes.clear} onClick={props.onClose}>
        Clear
      </div>
    </main>
  );
}

export default Filter;
