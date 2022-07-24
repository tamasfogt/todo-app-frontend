export default function Footer() {
  return (
    <footer className=" container flex flex-wrap justify-between items-center mx-auto p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        Todo app logo
      </div>
      <hr className="my-6 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 Tamas Fogt. All Rights Reserved.
      </span>
    </footer>
  );
}
