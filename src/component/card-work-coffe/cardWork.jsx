import "./cardWork.css";
export function CardWork({ number, workTitle, workDesc }) {
  return (
    <div className="card-work-item">
      <div className="card-work-item-content">
        <strong className="card-work-number">{number}</strong>
        <div className="card-work-body">
          <strong className="card-work-title">{workTitle}</strong>
          <p className="card-work-desc">{workDesc}</p>
        </div>
      </div>
    </div>
  );
}
