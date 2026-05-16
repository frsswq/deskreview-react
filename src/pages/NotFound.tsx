import Navbar from "../components/common/Navbar.tsx";

export default function NotFound() {
  return (
    <>
      <meta name="author" content="Deskreview" />
      <title>Not Found | Deskreview</title>
      <div className="[&_nav]:fixed">
        <Navbar />
      </div>
      <main className="flex h-screen flex-row items-center justify-center max-md:flex-col">
        <p className="mr-[30px] font-sans text-[5rem] leading-none font-normal tracking-[-0.025em] max-md:mr-0 max-md:text-[5rem]">
          404
        </p>
        <p className="font-sans text-[4rem] leading-none font-light tracking-[-0.025em] max-md:text-2xl">
          Not Found
        </p>
      </main>
    </>
  );
}
