const FormRow = ({ type, name, labelText, defautValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        className="form-input"
        id={name}
        name={name}
        onChange={onChange}
        defaultValue={defautValue || ""}
        required
      />
    </div>
  );
};
export default FormRow;
