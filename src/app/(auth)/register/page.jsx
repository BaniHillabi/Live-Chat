"use client";

import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/text";
import InputForm from "../components/InputForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

const register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();

  const handlebutton = () => {
    route.push("/login");
  };
  const handleimage = () => {
    route.push("/");
  };

  

  return (
    <form>
      <div className="flex flex-row justify-between mt-9 mx-20">
        <Image src={Logo} alt="Logo" onClick={(e) => {
            e.preventDefault();
            handleimage();
          }}/>
        <Button
          variant="outline"
          size="lg"
          onClick={(e) => {
            e.preventDefault();
            handlebutton();
          }}
        >
          Sign In
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-[86vh]">
        <div className="flex flex-col w-full max-w-md px-4">
          <Title size="h2" weight="semibold" className="text-center mb-8">
            Sign Up
          </Title>

          <InputForm
            label="Username"
            id="username"
            type="text"
            placeholder="Enter your name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputForm
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputForm
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-full p-8 mt-4 bg-[#6C5DD3] hover:bg-purple-700 text-white text-md rounded-md">
            SignUp
          </Button>
        </div>
      </div>
    </form>
  );
};

export default register;
