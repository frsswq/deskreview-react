import {
  EnvelopeClosedIcon,
  ChatBubbleIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  const contactLinks = [
    {
      href: "mailto:dzaki.zaidan@gmail.com",
      label: "Email us",
      icon: <EnvelopeClosedIcon />,
    },
    {
      href: "https://wa.me/+6285159177206",
      label: "Chat with us",
      icon: <ChatBubbleIcon />,
    },
    {
      href: "https://www.instagram.com/deskreview/",
      label: "Follow us",
      icon: <InstagramLogoIcon />,
    },
  ];

  return (
    <section className="desk-section">
      <h1 className="desk-title" id="contact">
        Get in touch
      </h1>
      <div className="flex flex-col gap-y-4 pt-2 max-md:gap-y-3">
        {contactLinks.map(({ href, label, icon }) => (
          <a
            className="contact-button flex w-full cursor-pointer flex-row items-center justify-between overflow-hidden rounded-lg border border-desk-gray-300 bg-desk-gray-300/50 px-6 py-6 no-underline hover:border-desk-gray-500/50 max-md:px-4 max-md:py-4"
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <p className="m-0 font-sans text-desk-lg leading-none font-normal tracking-[-0.025em] text-desk-gray-700 max-md:text-desk-sm">
              {label}
            </p>
            <span className="scale-200 translate-x-[-25%] text-desk-gray-500 max-md:scale-150">
              {icon}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
