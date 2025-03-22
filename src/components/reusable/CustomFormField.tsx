"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { UseFormReturn } from "react-hook-form";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface CustomFormFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  link?: boolean;
  showPasswordToggle?: boolean;
}

const CustomFormField = ({
  form,
  name,
  label,
  placeholder,
  type = "text",
  link = false,
  showPasswordToggle = false,
}: CustomFormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                type={showPasswordToggle && showPassword ? "text" : type}
                {...field}
                className={form.formState.errors[name] ? "border-red-500" : ""}
              />
              {showPasswordToggle && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <HiEyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <HiEye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          {link ? (
            <div className="flex relative justify-between items-center w-full">
              <FormMessage />
              <Link
                href="/forgot-password"
                className="text-sm forgot-password-link text-blue-600 hover:text-blue-500 absolute right-0"
              >
                Forgot Password?
              </Link>
            </div>
          ) : (
            <FormMessage />
          )}
        </FormItem>
      )}
    />
  );
};
export default CustomFormField;
