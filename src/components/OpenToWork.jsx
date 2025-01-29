import React from "react";

const OpenToWork = () => {
  return (
    <section className="mb-24 flex flex-col justify-center items-center gap-8">
      <div className="bg-white border border-gray-300 rounded-md w-[80%] md:w-[70%] lg:w-[60%] p-4 shadow-lg">
        <p className="font-medium text-center text-gray-900 md:text-lg">
          As a new dev ( who has the power to center a div ), I am actively
          seeking to team up with anyone to work on projects related to frontend
          development and beyond. Would love to collaborate with anyone in need
          for development work.
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-5">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mt-6">
          Want to collab for a project ?
        </h4>
        <button
          onClick={() => {
            const email = "madesh02104@gmail.com";
            const subject = "Hello from your portfolio!";
            const body = "Hi, I found your portfolio and wanted to connect...";
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank"
            );
          }}
          className="font-medium text-xl sm:text-2xl p-1 px-4 text-emerald-600 border-2 border-emerald-600 rounded-2xl transition ease-in delay-100 duration-100 hover:bg-emerald-600 hover:text-white active:scale-90"
        >
          Ping me !
        </button>
      </div>
    </section>
  );
};

export default OpenToWork;
