const Placeholder = ({ onChange, type }) => {
  return (
    <div>
      <input
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Placeholder;
