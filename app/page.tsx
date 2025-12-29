import Card from "@/components/Card";

const ASSETS = {
  profileImage: "/img/profile.png",
};

export default function About() {
  return <Card content={<Content />} />;
}

function Content() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img
          src={ASSETS.profileImage}
          className="max-h-40 rounded-full"
          alt="my profile picture"
        />
      </div>
      <div className="my-5 flex flex-col items-center justify-center">
        <p>@isgin01</p>
        <p>Javascript Developer</p>
        <p>18 y.o.</p>
      </div>
      <div>
        I have an ambitious idea of building a personal website in quite an
        unconventional format. When it popped up in my head, I instantly wrote
        it down in my notes and even draw a schema. Actually, I wanted to start
        working on another project but then I realized that a personal website
        has bigger priority to me now.
      </div>
    </>
  );
}
