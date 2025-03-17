const SkillsCard = ({ src, alt, title }) => {
  return (
    <article className="card">
      <img
        src={src}
        alt={`${alt} logo`}
        title={title}
        loading="lazy"
        className="w-16 hover:grayscale transition-all duration-300"
        width="100"
        height="100"
      />
      <p className="font-semibold">{alt}</p>
    </article>
  );
};

export default SkillsCard;
