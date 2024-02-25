const ContactCard = () => {
  return (
    <form className="flex flex-[0.5] flex-col gap-4 bg-secondary rounded-2xl p-4 overflow-hidden">
      <label className="flex flex-col">
        <span className="text-tertiary font-medium mb-2">Your Name</span>
        <input
          type="text"
          name="name"
          placeholder="what's your name"
          className="bg-primary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outlined-none border-none font-light"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-tertiary font-medium mb-2">Your Email</span>
        <input
          type="email"
          name="email"
          placeholder="what's your email"
          className="bg-primary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outlined-none border-none font-light"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-tertiary font-medium mb-2">Your Message</span>
        <textarea
          rows="3"
          name="message"
          placeholder="what do you want to say"
          className="bg-primary py-2 px-4 placeholder:text-tertiary text-tertiary rounded-lg outline-none border-none font-light"
        />
      </label>

      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-primary font-bold rounded-xl"
      >
        Send
      </button>
    </form>
  );
};

export default ContactCard;
