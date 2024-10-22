"use client";

import React from "react";
import { useState } from "react";
import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/text";
import InputForm from "../components/InputForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="flex flex-row justify-between mt-9 mx-20">
        <Image src={Logo} alt="Logo" />
        <Button variant="outline" size="lg">
          Sign Up
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-[86vh]">
        <div className="flex flex-col w-full max-w-md px-4">
          <Title size="h2" weight="semibold" className="text-center mb-8">
            Login
          </Title>

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

          <Button
            className="w-full p-8 mt-4 bg-[#6C5DD3] hover:bg-purple-700 text-white text-md rounded-md"
          >
            Log In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
