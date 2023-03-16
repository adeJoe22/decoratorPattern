const Button = ({
  children,
  className,
  disabled = false,
  busy = false,
  onClick = () => {},
  ...rest
}) => {
  const defaultClassName =
    "shadow-md focus:cursor-pointer transition duration-300";

  return (
    <button
      className={`${defaultClassName} ${className ? className : ""}`}
      disabled={disabled}
      onClick={(e) => !busy && !disabled && onClick(e)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
