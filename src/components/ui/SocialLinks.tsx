import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function SocialLinks() {
  return (
    <article className="flex gap-4">
      <a
        title="Linkedin"
        className="social__links"
        href="https://www.linkedin.com/in/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin className="w-full h-full" />
      </a>
      <a
        title="GitHub"
        className="social__links"
        href="https://github.com/emmanuel-cruz-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-full h-full" />
      </a>
      <a
        title="Email"
        className="social__links"
        href="mailto:emmanuelgerr@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FaPaperPlane className="w-full h-full" />
      </a>
    </article>
  );
}

export default SocialLinks;
