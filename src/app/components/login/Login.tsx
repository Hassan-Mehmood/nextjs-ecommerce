'use client';
import { signIn, signOut } from 'next-auth/react';
const inputs = ['email', 'password'];

export default function Login() {
  return (
    <section className="text-slate-800 mb-2 md:w-full">
      <div>
        <h3 className="mb-2 text-2xl font-light">SIGN IN</h3>
        {inputs.map((input) => (
          <form key={input}>
            <label htmlFor={input} className="mb-2 uppercase inline-block text-sm">
              {input}:
            </label>
            <input type={input} id={input} className="border border-slate-400 w-full p-1 mb-4" />
          </form>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-[#323232] text-white py-2 w-full flex-1" onClick={() => signIn()}>
          Sign in
        </button>
        <p className="flex-1 f-full text-center text-[#c4a173]">Forgot your password</p>
      </div>
    </section>
  );
}
