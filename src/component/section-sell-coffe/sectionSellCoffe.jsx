import "./sectionSellCoffe.css";
import icon_arrow_up from "../../assets/plan/desktop/arrow-up.svg";
import icon_arrow_down from "../../assets/plan/desktop/arrow-down.svg";
import { CardSellCoffe } from "../card-sell-coffe/cardSellCoffe";
import { useDispatch, useSelector } from "react-redux";
export function SectionSellCoffe({ id, title, children, action }) {
  const OpenCard = useSelector((state) => state[id]);
  const dispatch = useDispatch();
  const ValueReducer = useSelector((state) => state);
  return (
    <div
      className={`section-sell-item ${
        ValueReducer.how_drink.value == "Capsule" && id == "grind_coffe"
          ? "disable"
          : ""
      }`}
    >
      <div onClick={() => dispatch(action())} className="button-title-arrow">
        <strong> {title}</strong>
        <button>
          <img
            className={`icon_arrow_up ${OpenCard.bol ? "active" : ""}`}
            src={icon_arrow_up}
            alt=""
          />
          <img
            className={`icon_arrow_down ${OpenCard.bol ? "" : "active"} `}
            src={icon_arrow_down}
            alt=""
          />
        </button>
      </div>
      <div className={`card-sell-container ${OpenCard.bol ? "card-open" : ""}`}>
        {children}
      </div>
    </div>
  );
}
