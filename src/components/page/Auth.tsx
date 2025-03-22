"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { CustomFormField } from "@/components/reusable/CustomFormField";
import { usePathname } from "next/navigation";
import { getAuthSchema } from "@/lib/Schemas/getAuthSchema";
import Image from "next/image";

const Auth = () => {
  const pathName = usePathname();
  const formSchema = getAuthSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div
        className="flex items-start mb-2 mt-2 w-full gap-2 flex-col justify-center pl-4 sm:pl-8 md:pl-12 lg:pl-24 xl:pl-40
       "
      >
        <Image src="/outly.svg" alt="Outly Logo" width={200} height={200} />
      </div>
      <Separator className="w-full" />
      <div className="w-full flex items-center justify-center ">
        <div className="w-full max-w-md p-8 space-y-6  rounded-lg ">
          <div>
            <h1 className="text-3xl">
              {pathName === "/login" ? "LOGIN" : "SIGNUP"}
            </h1>
            <p>
              {pathName === "/login"
                ? "hi, welcome back 🙌"
                : "hi, create new account 🙌"}
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="w-5 h-5" />
            <span>Continue With Google</span>
          </Button>
          <div className="flex items-center w-full">
            <Separator className="flex-1" />
            <p className="mx-4 text-sm text-gray-500">or login with email</p>
            <Separator className="flex-1" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Email Field */}
              <CustomFormField
                form={form}
                name="email"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />

              {/* Password Field */}
              <CustomFormField
                form={form}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
                link={pathName === "/login"}
                showPasswordToggle={true}
              />
              <Button type="submit" variant="brand" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
          <div className="text-center mt-4">
            {pathName === "/login" ? (
              <>
                <span className="text-sm text-gray-600">
                  Not registered yet?{" "}
                </span>
                <Link
                  href="/signup" // Update the href as needed
                  className="text-sm text-blue-600 hover:text-blue-500 inline-flex items-center"
                >
                  Create an account{" "}
                  <HiOutlineArrowSmUp className="ml-1 w-4 h-4 transform rotate-45" />
                </Link>
              </>
            ) : (
              <Link
                href="/login" // Update the href as needed
                className="text-sm text-blue-600 hover:text-blue-500 inline-flex items-center"
              >
                Login{" "}
                <HiOutlineArrowSmUp className="ml-1 w-4 h-4 transform rotate-45" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Auth;
