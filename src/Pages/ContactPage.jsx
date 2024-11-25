import React from 'react';

function ContactPage() {
  return (
    <div className="relative isolate bg-gradient-to-r from-[#F8C8DC] to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Contact Info Section */}
        <div className="relative px-6 py-16 bg-white shadow-lg rounded-xl lg:static lg:px-8 lg:py-20">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-extrabold text-[#6A0DAD]">Get in Touch</h2>
            <p className="mt-4 text-lg text-[#6A0DAD]/80">
              We'd love to hear from you! Reach out for inquiries or assistance anytime.
            </p>
            <dl className="mt-8 space-y-6 text-[#6A0DAD]/70">
              <div className="flex gap-x-4 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-[#6A0DAD]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </dt>
                <dd>
                  <a
                    className="hover:text-[#6A0DAD]/90 transition"
                    href="mailto:support@moderncontact.com"
                  >
                    support@moderncontact.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-7 text-[#6A0DAD]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </dt>
                <dd>789 Innovation Lane, Bengaluru, India</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="px-6 py-16 bg-[#6A0DAD] text-white shadow-lg rounded-xl">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-2 w-full rounded-lg border-none bg-white px-4 py-2 text-[#6A0DAD] placeholder-[#6A0DAD]/70 focus:ring-2 focus:ring-[#F8C8DC]"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-2 w-full rounded-lg border-none bg-white px-4 py-2 text-[#6A0DAD] placeholder-[#6A0DAD]/70 focus:ring-2 focus:ring-[#F8C8DC]"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 w-full rounded-lg border-none bg-white px-4 py-2 text-[#6A0DAD] placeholder-[#6A0DAD]/70 focus:ring-2 focus:ring-[#F8C8DC]"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-2 w-full rounded-lg border-none bg-white px-4 py-2 text-[#6A0DAD] placeholder-[#6A0DAD]/70 focus:ring-2 focus:ring-[#F8C8DC]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 text-[#6A0DAD] hover:bg-[#F8C8DC] hover:text-[#6A0DAD]/80 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
