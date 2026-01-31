export function Button() {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full max-w-md mx-auto">
      <a
        href="#contact"
        className="px-6 py-3 bg-white text-black border-2 border-black font-bold rounded-lg dark:bg-black dark:text-white dark:border-white hover:scale-105 transition-transform duration-200 text-center w-full sm:w-auto"
      >
        Contact Me
      </a>
      <a
        href="#email-me"
        className="px-6 py-3 bg-black text-white font-bold rounded-lg dark:bg-white dark:text-black hover:scale-105 transition-transform duration-200 text-center w-full sm:w-auto"
      >
        Get in Touch
      </a>
    </div>
  );
}
