export function Button() {
  return (
    <div className="mt-8 px-6 py-3 button-wrapper flex gap-8 ml-12 w-[25rem]">
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-white text-black border-[3px] border-black p-4 font-bold rounded-lg dark:bg-black dark:text-white dark:border-white"
      >
        Contact Me
      </a>
      <a
        href="#email-me"
        className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-lg dark:bg-white dark:text-black"
      >
        Get in Touch
      </a>
    </div>
  );
}
