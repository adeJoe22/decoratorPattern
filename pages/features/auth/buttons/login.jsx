import PrimaryButton from "../../../ui/button/primary";

const LoginButton = ({
  children,
  disabled = false,
  busy,
  setBusy = () => {},
  setUser = () => {},
}) => {
  return (
    <PrimaryButton
      children={children}
      busy={busy}
      disabled={disabled}
      onClick={() => {
        setBusy(true);

        setTimeout(() => {
          setUser({
            name: "Joe",
            email: "test@example.com",
            lastLoggedInAt: new Date().getTime(),
          });
          setBusy(false);
        }, 3000);
      }}
    >
      <div className="flex gap-2 items-center">
        <div>
          {/* <div className="h-4 w-4">0</div> */}
          <div>{children}</div>
        </div>
      </div>
    </PrimaryButton>
  );
};

export default LoginButton;
