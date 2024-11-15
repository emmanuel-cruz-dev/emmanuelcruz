import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        title="Linkedin"
        className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
        href="https://www.linkedin.com/in/emmanuel-cruz-6a242430b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-full h-full" />
      </a>
      <a
        title="Github"
        className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
        href="https://github.com/EmmaLCruz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-full h-full" />
      </a>

      <a
        title="Email"
        className="w-8 hover:text-colorTertiary transition-colors duration-500 ease-in-out"
        href="mailto:emmanuelgerr@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPaperPlane className="w-full h-full" />
      </a>
    </div>
  );
};

export default SocialLinks;
