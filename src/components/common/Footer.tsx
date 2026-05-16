export default function Footer() {
  const today = new Date();
  const formattedTime = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  return (
    <footer className="mx-auto my-12 flex flex-row items-center justify-center max-md:my-8">
      <p className="text-center font-sans text-desk-base leading-none text-desk-gray-700 max-md:text-desk-sm">
        © 2026, Deskreview - {formattedTime}
      </p>
    </footer>
  );
}
