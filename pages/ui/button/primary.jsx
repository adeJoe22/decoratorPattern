import Button from "./index";

const PrimaryButton = ({
  children,
  busy = false,
  disabled = false,
  ...rest
}) => {
  const defaultClassName = "border-blue-600 bg-blue-500";
  const disabledClassName = "bg-gray-300 text-gray-500 cursor-not-allowed";
  const busyClassName =
    "border-blue-700 bg-blue-600 opacity-70 cursor-not-allowed";
  return (
    <Button
      className={`${
        busy ? busyClassName : disabled ? disabledClassName : defaultClassName
      } px-8 py-2  rounded-lg`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
