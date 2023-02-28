import React from 'react';

const inputs = ['email', 'password'];

export default function Login() {
  return (
    <section className="pt-20 md:pt-10 px-5 navBreak:px-1  xl:max-w-[90%] mx-auto mb-4">
      <div className="md:flex md:justify-between md:items-center md:gap-4 md:mx-auto">
        <section className="text-slate-800 mb-2 md:w-full">
          <div>
            <h3 className="mb-2 text-2xl font-light">SIGN IN</h3>
            {inputs.map((input) => (
              <form key={input}>
                <label htmlFor={input} className="mb-2 uppercase inline-block text-sm">
                  {input}:
                </label>
                <input
                  type={input}
                  id={input}
                  className="border border-slate-400 w-full p-1 mb-4"
                />
              </form>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-[#323232] text-white py-2 w-full flex-1">Sign up</button>
            <p className="flex-1 f-full text-center text-[#c4a173]">Forgot your password</p>
          </div>
        </section>
        <section className="md:w-full">
          <div className="bg-[#f8f8f8] pt-4 pb-12 px-6 text-sm font-semibold">
            <h3 className="text-2xl mb-4 font-normal">New Costumer?</h3>
            <p>Create an account with us and you will be able to:</p>
            <ul className="list-disc pl-12 mb-4">
              <li>Check out faster</li>
              <li>Save multiple shipping addresses</li>
              <li>Access your order history</li>
              <li>Track new orders</li>
              <li>Save items to your wish list</li>
            </ul>
            <button className="bg-[#323232] text-white py-2 px-4">Create an account</button>
          </div>
        </section>
      </div>
    </section>
  );
}
