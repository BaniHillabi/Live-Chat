// components/InputForm.js

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const InputForm = ({
  label,
  id,
  type = "text",
  placeholder,
  required = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full mb-6">
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full py-8 pl-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        {...props}
      />
    </div>
  );
};

export default InputForm;
