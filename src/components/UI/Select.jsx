import { Form } from "react-bootstrap";
import { languages_list } from "../utils/constants/contants";

function Select({ handleChange, title }) {
  return (
    <div className="position-absolute outline-none rounded-3xl shadow">
      <Form.Select
        aria-label={title}
        className="border-0 bg-transparent"
        onChange={handleChange}
      >
        {languages_list.map((el) => {
          if (
            el.title &&
            typeof el.title === "string" &&
            el.title.includes("(") &&
            el.title.includes(")")
          ) {
            const langCodeMatch = el.title.match(/\(([^)]+)\)/);
            const langCode = langCodeMatch ? langCodeMatch[1] : "";

            console.log(`Title: ${el.title}, Lang Code: ${langCode}`); // Debug log

            return (
              <option key={el.id} value={langCode}>
                {el.title}
              </option>
            );
          } else {
            console.warn(
              `Invalid title format for language with ID ${el.id}: ${el.title}`
            );
            return null;
          }
        })}
      </Form.Select>
    </div>
  );
}

export default Select;
