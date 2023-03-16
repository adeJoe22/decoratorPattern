import { useState } from "react";
import { UserIcon } from "@heroicons/react/solid";

import PrimaryButton from "./ui/button/primary";
import LinkButton from "./ui/button/link";
import OutlineButton from "./ui/button/outline";
import LoginButton from "./features/auth/buttons/Login";

export default function Homepage() {
  const [busy, setBusy] = useState();
  const [user, setUser] = useState(undefined);
  const [text, setText] = useState("");

  return (
    <div className="mt-16 container mx-auto">
      <div className="flex gap-2">
        <PrimaryButton>Ok</PrimaryButton>
        <LinkButton>Link</LinkButton>
        <OutlineButton>Outlined</OutlineButton>
        <LoginButton setBusy={setBusy}>Login</LoginButton>
        {/* <TextField value={text} onChange={setText} /> */}
        <IntegerField value={text} onChange={setText} />
      </div>
    </div>
  );
}

// applying decoration pattern in functional programming to effect inheritance

const TextField = ({ placeholder, value, onChange = () => {} }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="text-gray-800 font-thin p-2 "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const IntegerField = ({ placeholder, value, onChange = () => {} }) => {
  function onlyInteger(str) {
    return str.replace(/[^0-9]/g, "");
  }
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={(value) => onChange(onlyInteger(value))}
    />
  );
};

const DecimalField = ({ placeholder, value, onChange = () => {} }) => {
  function onlyInteger(str) {
    return str.replace(/[^0-9]/g, "");
  }
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={(value) => onChange(onlyInteger(value))}
    />
  );
};
