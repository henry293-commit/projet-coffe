import { useSelector } from "react-redux";
import "./cheickoutOrder.css";
import { useEffect, useState } from "react";
import { Totalorder } from "../../Tools/total";
export function CheickoutOrder({ HidecheickoutComponent }) {
  const Result = useSelector((state) => state);
  const [withWindow, setwithWindow] = useState(window.innerWidth);
  useEffect(() => {
    const handleSize = () => {
      setwithWindow(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [withWindow]);
  return (
    <div className="shadow">
      <div className="cheickout_container">
        <strong className="cheickout_title">Récapitulatif</strong>
        <div className="cheickout_body">
          <p className="cheickout_body-orded">
            “Je bois mon café{" "}
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
            </span>{" "}
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
          <small className="cheickout_body_small_text">
            Est-ce correct? Vous pouvez procéder au paiement ou revenir à la
            sélection du forfait si quelque chose ne va pas.
            {/* Les codes de
            réduction d'abonnement peuvent également être utilisés à la caisse. */}
          </small>
          <div className="order_container_button">
            {withWindow >= 768 && (
              <span>
                $ <Totalorder /> / mo
              </span>
            )}
            <button
              onClick={() => HidecheickoutComponent((v) => false)}
              className=" btn cheickout_button "
            >
              Paiement{" "}
              {withWindow < 768 && (
                <span>
                  {" "}
                  $ <Totalorder /> / mo
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
