import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../redux/features/user/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.authToken);
  console.log(token);

  const handleEmail = (e) => {
    let email = e.target.value;
    setEmail(email);
  };

  const handlePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = () => {
    console.log("email", email);
    console.log("password", password)
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <Card className="max-w-sm mx-auto mt-56">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            onChange={handleEmail}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            onChange={handlePassword}
            id="password1"
            type="password"
            required
          />
        </div>

        <Button onClick={handleSubmit} type="button">Submit</Button>
      </form>
    </Card>
  );
}

export default Login;
