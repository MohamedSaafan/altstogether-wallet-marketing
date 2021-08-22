import Styles from "./person.module.scss";
import faker from "faker";
const TeamPhoto = ({ name, position }) => {
  return (
    <div className={Styles.person}>
      <div className={Styles.person__image}>
        <img src={faker.image.avatar()} alt='avatar' />
      </div>
      <div className={Styles.person__info}>
        <h4 className={Styles.person__name}>
          {name || faker.name.firstName() + faker.name.lastName()}
        </h4>
        <p className={Styles.person__position}>
          {position || "Lead Developer"}
        </p>
      </div>
    </div>
  );
};

export default TeamPhoto;
