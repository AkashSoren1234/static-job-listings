import classes from "./jobs_container.module.css";

function JobsContainer(props) {
  return (
    <div className={classes.jobs_container}>
      {props.showJobs.map((item) => (
        <section key={item.id} className={classes.single_job}>
          <div className={classes.job_details_with_pic}>
            <div className={classes.job_image}>
              <img src={item.logo} alt="" />
            </div>
            <div className={classes.job_details}>
              <div className={classes.about}>
                <h2 className={classes.job_name}>{item.company}</h2>
                {item.new && <span className={classes.new}>NEW!</span>}
                {item.featured && (
                  <span className={classes.featured}>FEATURED</span>
                )}
              </div>
              <h2 className={classes.job_post}>{item.position}</h2>
              <div className={classes.extra_details}>
                <span className={classes.post_time}>{item.postedAt}</span>
                <span className={classes.dot}></span>
                <span className={classes.job_duration}>{item.contract}</span>
                <span className={classes.dot}></span>
                <span className={classes.location}>{item.location}</span>
              </div>
              <div className={classes.line}></div>
            </div>
          </div>
          <div className={classes.skills}>
            {item.languages.map((item, index) => (
              <div key={index} onClick={props.onClick} className={classes.skill_name}>
                {item}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default JobsContainer;
