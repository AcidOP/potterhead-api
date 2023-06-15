import React from "react";

function Footer() {
  return (
    <footer className="flex lg:fixed w-screen bg-inherit bottom-0">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            Made with ❤️ by{" "}
            <a href="https://github.com/AcidOP" className="font-extrabold text-blue-700">
              AcidOP
            </a>{" "}
            and{" "}
            <a href="https://github.com/SpandyBoss" className="font-extrabold text-blue-700">
              Spandan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
