import Person from "../person";
import Styles from "./team.module.scss";

const Team = (props) => {
  return (
    <div className={`container ${Styles.team}`}>
      <h3 className={Styles.team__heading}>Meet the team</h3>
      <div className={Styles.team__gallary}>
        <Person />
        <Person position='QA Engineer' />
        <Person position='Sr. Product Designer' />
        <Person position='Software Engineer' />
        <Person position='Support Engineer' />
        <Person position='Software Engineer' />
        <Person />
        <Person />
        <div className={Styles.team__gallary__master}>
          <Person position='Founder' name='Alex Browckenbrow' />
        </div>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </div>
    </div>
  );
};

export default Team;
