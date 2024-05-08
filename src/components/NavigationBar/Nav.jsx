"use client";
import logo from "../../assets/images/logo.png";
const Nav = ({ isLoggedIn, toggleLogin }) => {
  const onSubmit = () => {
    toggleLogin();
  };
  return (
    <>
      <header className="text-primary-white bg-primary-black border-thin-border border-b ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-48 h-auto" src={logo} alt="image description" />
          </a>
          {isLoggedIn && (
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
              <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">
                Videos
              </a>
              <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">
                Podcasts
              </a>
              <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">
                Products
              </a>
              <a className="mr-5 hover:text-primary-grey hover:cursor-pointer">
                Articles
              </a>
            </nav>
          )}
          <button
            className={
              isLoggedIn
                ? "inline-flex items-center bg-primary-accent text-primary-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
                : "ml-auto inline-flex items-center bg-primary-accent text-primary-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            }
            onClick={onSubmit}
          >
            {!isLoggedIn ? "Login" : "Logout"}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Second Navbar with Linked Pins */}
      {isLoggedIn && (
        <div className="text-primary-white bg-primary-black-trans border-thin-border border-b ">
          <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <nav className="md:mx-auto flex flex-wrap items-center justify-center text-white font-sans text-md">
              <a className="mr-5 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center">
                Videos
              </a>
              <a className="mr-5 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center">
                Podcasts
              </a>
              <a className="mr-5 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center">
                Products
              </a>
              <a className="mr-5 hover:cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center">
                Articles
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
