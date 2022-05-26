import styles from "./Input.module.css";

const Input = ({
  placeholder,
  name,
  handleChange,
  type,
  value,
  step = "0.0001",
}) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      type={type}
      value={value}
      step={step}
    />
  );
};

export default Input;
