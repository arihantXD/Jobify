function FormRowSelect({ name, labelText, list, defautValue = "", onChange }) {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor="jobStatus">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defautValue}
        onChange={onChange}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default FormRowSelect;
