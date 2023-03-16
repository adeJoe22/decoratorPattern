import Button from "./index";

const LinkButton = ({ children, ...rest }) => {
  return (
    <Button
      className="px-8 py-2 border border-transparent bg-transparent"
      {...rest}
    >
      {children}
    </Button>
  );
};
export default LinkButton;
