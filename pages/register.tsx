import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import login from "../public/image/login.svg";
import { Button } from "../stories/modules/button/Button";
import { Input } from "../stories/modules/input/Input";
import { useForm } from "react-hook-form";

const Register: NextPage = () => {
  const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } } = useForm();
  const onSubmit = (data: any) => {
    console.log("login", data);
  };
  return (
    <div>
      <Head>
        <title>MetaWall</title>
        <meta name="description" content="MetaWall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-full min-h-screen bg-c-bg">
        <div className="flex max-w-[869px] max-h-[535px] min-w-[600px] border-2 border-solid border-dark py-[60px] px-12 bg-c-bg shadow-main">
          <div className="w-1/2 pr-6">
            <Image src={login} objectFit="cover"></Image>
          </div>
          <div className="w-1/2 flex flex-col items-center pl-6">
            <h1 className="text-6xl text-primary font-paytone font-black leading-1.4">
              MetaWall
            </h1>
            <h2 className="text-2xl text-dark font-helvetica font-bold leading-snug">
              註冊
            </h2>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="暱稱"
                className="mt-6"
                register={register("userName", { required: true })}
                error={{
                  errors: errors.userName,
                  requiredError: "請輸入暱稱",
                }}
              />
              <Input
                placeholder="Email"
                className="mt-4"
                register={register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
                error={{
                  errors: errors.email,
                  requiredError: "請輸入帳號",
                  patternError: "email 格式有誤",
                }}
              />
              <Input
                placeholder="Password"
                className="mt-4"
                register={register("password", { required: true, minLength: 6 })}
                error={{
                  errors: errors.password,
                  requiredError: "請輸入密碼",
                  minLengthError: "密碼長度應大於6個字元",
                }}
              />
              <Button
                type="submit"
                label="註冊"
                className="my-4"
              />
            </form>

            <Link href="/">
              <span className="text-dark">已有帳號？前往登入</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
