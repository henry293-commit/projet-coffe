import "./cardAbout.css";

export function CardAbout({ title, body }) {
  return (
    <div className=" card-about">
      <div className="card-about-body">
        <strong className="card-about-title">{title}</strong>
        <p className="card-about-desc">{body}</p>
      </div>
    </div>
  );
}
