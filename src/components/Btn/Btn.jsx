const Btn = ({ children, onClick, disabled, scheme }) => {
  console.log(scheme);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ background: `${scheme === "dark" ? "#000000" : "#fafafa"}` }}
    >
      {children}
    </button>
  );
};

export default Btn;
