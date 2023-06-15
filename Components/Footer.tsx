import React from "react";

function Footer() {
  return ( 

    <footer className="bottom-0 sticky mx-auto mt-4 w-fit">
    <div className=" max-w-screen-xl px-4 sm:px-6 lg:px-8">
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