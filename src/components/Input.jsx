const Input = (props) => {
  return (
    <label>
      {props.label}
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.ph}
        name={props.name}
      />
    </label>
  );
};

export default Input;
