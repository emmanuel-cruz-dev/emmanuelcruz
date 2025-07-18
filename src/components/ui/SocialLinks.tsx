import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

function SocialLinks() {
  return (
    <article className="flex gap-4 social-links__container">
      <a
        className="social__links"
        href="https://www.linkedin.com/in/emmanuel-cruz-dev/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin className="w-full h-full" />
      </a>
      <a
        className="social__links"
        href="https://github.com/emmanuel-cruz-dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="w-full h-full" />
      </a>
      <a
        className="social__links"
        href="mailto:emmanuelgerr@gmail.com"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FaPaperPlane className="w-full h-full" />
      </a>
    </article>
  );
}

export default SocialLinks;
