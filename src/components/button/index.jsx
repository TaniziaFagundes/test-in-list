const Button = ({ children, handleClick, disabled }) => {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
