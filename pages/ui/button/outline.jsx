import Button from "./index";

const OutlineButton = ({ children, ...rest }) => {
  return (
    <Button className="px-8 py-2 border border-white bg-transparent" {...rest}>
      {children}
    </Button>
  );
};
export default OutlineButton;
