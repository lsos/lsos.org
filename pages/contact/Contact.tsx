import { discordLink, githubLink } from "./contactLinks";

export { Contact };

function Contact() {
  return (
    <>
      <div>
        Email: <a className="contact-address" />
      </div>
      <div>
        Chat: <a href={discordLink}>{discordLink}</a>
      </div>
      {/*
      <div>
        Discussions: <a href={githubLink}>{githubLink}</a>
      </div>
      */}
    </>
  );
}
