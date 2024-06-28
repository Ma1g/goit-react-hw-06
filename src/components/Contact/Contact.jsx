import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { IoCall, IoPerson } from "react-icons/io5";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}>
          <IoPerson />
          {name}
        </p>
        <p className={css.text}>
          <IoCall />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}