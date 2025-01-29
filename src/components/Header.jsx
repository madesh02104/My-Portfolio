import React from "react";

const Header = ({ scrollToAbout }) => {
  return (
    <section className="flex justify-between m-8 mx-8 md:mx-16 lg:mx-24">
      <p 
        onClick={scrollToAbout}
        className="text-gray-600 font-medium text-xl sm:text-2xl p-1 rounded-lg transition ease-in delay-100 duration-100 hover:border-b-2 cursor-pointer"
      >
        Madesh
      </p>
      <button
        onClick={() => {
          const email = "madesh02104@gmail.com";
          const subject = "Hello from your portfolio!";
          const body = "Hi, I found your portfolio and wanted to connect...";
          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
            "_blank"
          );
        }}
        className="font-medium text-xl sm:text-2xl p-1 px-4 text-emerald-600 border-2 border-emerald-600 rounded-2xl transition ease-in delay-100 duration-100 hover:bg-emerald-600 hover:text-white active:scale-90"
      >
        Ping me !
      </button>
    </section>
  );
};

export default Header;