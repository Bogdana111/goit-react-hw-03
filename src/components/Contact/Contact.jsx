import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.contactItem}>
      <div className={s.wrapper}>
        <div className={s.iconWrapper}>
          <FaUser className={s.icon} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.iconWrapper}>
          <FaPhoneAlt className={s.icon} />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
