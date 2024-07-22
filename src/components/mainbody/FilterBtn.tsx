import { useState } from 'react';

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
      
        onClick={toggleDropdown}
        className="border flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>
            <img src="./assets/list-filter.png" alt="" />
        </span>
        <span className='px-2 hidden md:block'>Filter</span>
        <span className='hidden md:block'>
            <img src="./assets/chevron-down.png" alt="" />
        </span>
      </button>

      {isOpen && (
        <div
          className=" absolute  mt-1 w-full z-[100] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              
            </a>
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 2
            </a>
            <a
              href="#!"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Option 3
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
