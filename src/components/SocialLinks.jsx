import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      <a
        title="Linkedin"
        className="social__links"
        href="https://www.linkedin.com/in/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-full h-full" />
      </a>
      <a
        title="Github"
        className="social__links"
        href="https://github.com/emmanuel-cruz-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-full h-full" />
      </a>

      <a
        title="Email"
        className="social__links"
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
