import React from 'react';

export default function Signup() {
  return (
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
  );
}
