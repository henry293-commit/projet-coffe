import "./orded.css";
import { useSelector } from "react-redux";
export function Orded({ displayCheickout }) {
  const Result = useSelector((state) => state);
  let DisableButton = null;
  if (Result.how_drink.value == "Capsule") {
    DisableButton =
      Result.how_drink.value &&
        Result.type_coffee.value &&
        Result.how_much_coffee.value &&
        Result.delivery_coffee.value
        ? false
        : true;
  } else {
    DisableButton =
      Result.how_drink.value &&
        Result.type_coffee.value &&
        Result.how_much_coffee.value &&
        Result.grind_coffe.value &&
        Result.delivery_coffee.value
        ? false
        : true;
  }
  return (
    <div className="orded_container">
      <div className="order_container_content">
        <strong className="orded_container_title">
          Récapitulatif de la commande
        </strong>
        <p className="orded_container-body">
          “Je bois mon café {Result.how_drink.value == "Capsule" && "en "}{" "}
          <span>
            {Result.how_drink.value ? Result.how_drink.value : "____"}
          </span>{" "}
          , avec un grain de type{" "}
          <span>
            {Result.type_coffee.value ? Result.type_coffee.value : "____"}
          </span>
          .{" "}
          <span>
            {Result.how_much_coffee.value
              ? Result.how_much_coffee.value
              : "____"}
          </span>
          {Result.how_drink.value != "Capsule" ? (
            <>
              moulus à la
              <span>
                {Result.grind_coffe.value ? Result.grind_coffe.value : "____"}
              </span>
            </>
          ) : (
            ""
          )}
          , envoyés chaque{" "}
          <span>
            {Result.delivery_coffee.value
              ? Result.delivery_coffee.value
              : "____"}
          </span>
          .”
        </p>
      </div>
      <div className="order_container_button">
        <button
          onClick={() => displayCheickout((v) => true)}
          disabled={DisableButton}
          className="btn create_plan_button "
        >
          Créer mon plan !
        </button>
      </div>
    </div>
  );
}
