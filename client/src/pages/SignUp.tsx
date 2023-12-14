import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Navbar from "components/Navbar";
import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(
    dayjs("2023-04-17")
  );
  const [retypePassword, setRetypePassword] = useState("");

  const formStyle = { margin: "2rem"};
  const onSubmitHandler = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault();
  };
  return (
    <div className="h-screen bg-hero-pattern">
      <Navbar visible={false} />
      <div className="flex flex-row justify-center h-[93%]">
        <div className="h-[70%] w-[50%] bg-black bg-opacity-20 relative top-24 shadow-xl shadow-black-500 grid grid-cols-2">
          <TextField
          className="text-red-100"
            sx={formStyle}
            id="outlined-basic"
            label="First Name"
            value={firstName}
            type="text"
            required
            onChange={(ev) => setFirstName(ev.target.value)}
          />
          <TextField
            sx={formStyle}
            id="outlined-basic"
            label="Last Name"
            value={lastName}
            required
            onChange={(ev) => setLastName(ev.target.value)}
          />
          <TextField
            sx={formStyle}
            id="outlined-basic"
            label="Email"
            value={email}
            required
            onChange={(ev) => setEmail(ev.target.value)}
            type="email"
          />

          <DatePicker
            sx={formStyle}
            views={['day','month','year']}
            label="Date Of Birth"
            value={dateOfBirth}
            defaultValue={dayjs("2023-04-17")}
            onChange={(newDate) => setDateOfBirth(newDate)}
          />

          <TextField
            sx={formStyle}
            id="outlined-basic"
            label="password"
            value={password}
            required
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
          />
          <TextField
            sx={formStyle}
            id="outlined-basic"
            label="Retype Password"
            value={retypePassword}
            required
            onChange={(ev) => setRetypePassword(ev.target.value)}
            type="password"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
