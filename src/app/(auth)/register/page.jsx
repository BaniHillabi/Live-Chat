import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/text";
import InputForm from '../components/InputForm'

const register = () => {
  return (
    <form>
      <div className="flex flex-row justify-between mt-9 mx-20">
        <Image src={Logo} className="" />
        <Button variant="outline" size="lg">
          Sign In
        </Button>
      </div>
      <div className="flex justify-center items-center min-h-[86vh]">
        <div className="flex flex-col w-[468px] justify-center items-center">
          <Title size="h2" weight="semibold">
            Sign Up
          </Title>
          <InputForm
            type="text"
            placeholder="Enter your username"
            label="Username"
            className="mb-4"
          />
          <InputForm
            type="email"
            placeholder="Enter your email"
            label="Email"
            className="mb-4"
          />
          <InputForm
            type="password"
            placeholder="Enter your password"
            label="Password"
            className="mb-6"
          />
        </div>
      </div>
    </form>
  );
};

export default register;
