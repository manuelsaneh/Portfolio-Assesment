const ProjectCard = ({ name, description, tags, image, web_link }) => {
  return (
    <>
      <div className="mt-5">
        <h3 className="text-tertiary text-[24px] font-semibold">{name}</h3>
      </div>
      <div className="bg-secondary p-5 rounded-2xl w-full">
        <div className="border rounded-lg overflow-hidden">
          <img
            src={image}
            alt="project-image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <h2 className="text-[20px] font-medium">Description:</h2>
        <p className="mt-2 text-tertiary text-[14px] font-normal">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <a
          href={`${web_link}`}
          target="_blank"
          className="text-[14px] font-medium cursor-pointer no-underline p-1 border-2 border-secondary text-secondary"
        >
          View Website &rarr;
        </a>
      </div>

      <span className="block h-[5px] w-full border-t-2 border-solid border-secondary p-0 last:border-0"></span>
    </>
  );
};

export default ProjectCard;
