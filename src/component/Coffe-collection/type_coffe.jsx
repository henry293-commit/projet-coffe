import "./type_coffe.css";
export function CoffeCollection({ img, title, body, lacated = {} }) {
  return (
    <div className={`collection-one-item ${body && "home"}`}>
      <div className="collection-item-img">
        <img src={img} alt="" />
      </div>
      <div className="collection-item-body ">
        <strong className="collection-item-title">{title}</strong>
        {body && <p className="collection-item-desc">{body}</p>}
        {lacated && (
          <div className="located">
            <span>{lacated.street}</span>
            <span>{lacated.city}</span>
            <span>{lacated.postal}</span>
            <span>{lacated.cell}</span>
          </div>
        )}
      </div>
    </div>
  );
}
