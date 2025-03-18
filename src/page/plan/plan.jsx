import "./plan.css";
import { Footer } from "../../component/footer/footer";
import { CardWork } from "../../component/card-work-coffe/cardWork";
import { SectionSellCoffe } from "../../component/section-sell-coffe/sectionSellCoffe";
import { CardSellCoffe } from "../../component/card-sell-coffe/cardSellCoffe";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverey_coffe_value,
  delivery_coffee,
  grind_coffee,
  grind_coffee_value,
  how_drink,
  how_drink_value,
  how_much_coffee,
  how_much_coffee_value,
  type_coffee,
  type_coffee_value,
} from "../../Tools/reducer";
import { Orded } from "../../component/Plan-commade-orded-/orded";
import { CheickoutOrder } from "../../component/plan-checkout/cheickoutOrder";
import { useState } from "react";
export function Plan() {
  const dispatch = useDispatch();
  const OpenCardSumary = (e) => {
    const ParentElement = e.target.parentElement;
    Array.from(ParentElement.children).forEach((child) =>
      child.classList.remove("card-active")
    );
    e.target.classList.add("card-active");
  };
  const [displayCheickoutComponent, setdisplayCheickoutComponent] =
    useState(false);
  if(displayCheickoutComponent){
	document.body.style.overflow = 'hidden'
  }else{
	document.body.style.overflow = ''
  }
  return (
    <div className="container-plan">
      <section className="section-work">
        <div className="card-work">
          <CardWork
            number={"01"}
            workTitle={"Choisissez votre café"}
            workDesc={
              "Faites votre choix parmi notre gamme évolutive de cafés artisanaux. Nos grains proviennent de sources éthiques et nous les payons à des prix équitables. Il y a chaque mois de nouveaux cafés dans tous les profils que vous pouvez essayer."
            }
          />

          <CardWork
            number={"02"}
            workTitle={"Choisissez la fréquence"}
            workDesc={
              "Personnalisez la fréquence de vos commandes, la quantité, même votre style de torréfaction et votre type de mouture. Suspendez, ignorez ou annulez votre abonnement sans engagement via notre portail en ligne."
            }
          />

          <CardWork
            number={"03"}
            workTitle={"Recevez et profitez-en !"}
            workDesc={
              "Nous expédions votre colis sous 48h, fraîchement torréfié. Asseyez-vous et dégustez des cafés primés de classe mondiale, sélectionnés pour offrir une expérience de dégustation distincte."
            }
          />
        </div>
      </section>
      <section className="order-coffe">
        <div className="order-coffe-sumary">
          <ul>
            <li
              onClick={(e) => {
                dispatch(how_drink());
                OpenCardSumary(e);
              }}
            >
              <span>01</span>Préférences
            </li>
            <hr />
            <li
              //   className={OpenCardSumary.type_coffee && "card-active"}
              onClick={(e) => {
                dispatch(type_coffee());
                OpenCardSumary(e);
              }}
            >
              <span>02</span>Type de haricot
            </li>
            <hr />
            <li
              //   className={OpenCardOpenCardSumary.how_much_coffee && "card-active"}
              onClick={(e) => {
                dispatch(how_much_coffee());
                OpenCardSumary(e);
              }}
            >
              <span>03</span>Quantité
            </li>
            <hr />
            <li
              onClick={(e) => {
                dispatch(grind_coffee());
                OpenCardSumary(e);
              }}
            >
              <span>04</span>Option de mouture
            </li>
            <hr />
            <li
              //   className={OpenCardOpenCardSumary.delivery_coffee && "card-active"}
              onClick={(e) => {
                dispatch(delivery_coffee());
                OpenCardSumary(e);
              }}
            >
              <span>05</span>Livraisons
            </li>
          </ul>
        </div>
        <div className="order-coffe-choose">
          <SectionSellCoffe
            id={"how_drink"}
            title={"Comment buvez-vous votre café ?"}
            action={how_drink}
          >
            <CardSellCoffe
              title={"Capsule"}
              body={
                "Compatible avec les systèmes Nespresso et les cafetières similaires"
              }
              response={"how_drink"}
              action={how_drink_value("Capsule")}
            />
            <CardSellCoffe
              title={"Filtre"}
              body={
                "Pour les méthodes de versement ou d'égouttement comme Aeropress, Chemex et V60"
              }
              response={"how_drink"}
              action={how_drink_value("Filtre")}
            />
            <CardSellCoffe
              title={"Espresso"}
              body={
                "Des grains denses et finement moulus pour une expérience intense et savoureuse"
              }
              response={"how_drink"}
              action={how_drink_value("Espresso")}
            />
          </SectionSellCoffe>

          <SectionSellCoffe
            id={"type_coffee"}
            title={"Quel type de café ?"}
            action={type_coffee}
          >
            <CardSellCoffe
              title={"Origine unique"}
              body={
                "Café distinctif et de haute qualité provenant d'une ferme familiale spécifique"
              }
              response={"type_coffee"}
              action={type_coffee_value("Origine unique")}
            />
            <CardSellCoffe
              title={"Café décaféiné"}
              body={
                "Tout comme le café ordinaire, sauf que la caféine a été supprimée"
              }
              response={"type_coffee"}
              action={type_coffee_value("Café décaféiné")}
            />
            <CardSellCoffe
              title={"Mélangé"}
              body={
                "Combinaison de deux ou trois grains de cafés biologiques torréfiés foncés"
              }
              response={"type_coffee"}
              action={type_coffee_value("Mélangé")}
            />
          </SectionSellCoffe>

          <SectionSellCoffe
            id={"how_much_coffee"}
            title={"Combien voudriez-vous ?"}
            action={how_much_coffee}
          >
            <CardSellCoffe
              title={"250g"}
              body={
                "Perfect for the solo drinker. Yields about 12 delicious cups."
              }
              response={"how_much_coffee"}
              action={how_much_coffee_value("250g")}
            />
            <CardSellCoffe
              title={"500g"}
              body={
                "Option parfaite pour un couple. Donne environ 40 tasses délicieuses."
              }
              response={"how_much_coffee"}
              action={how_much_coffee_value("500g")}
            />
            <CardSellCoffe
              title={"1000g"}
              body={
                "Parfait pour les bureaux et les événements. Donne environ 90 délicieuses tasses."
              }
              response={"how_much_coffee"}
              action={how_much_coffee_value("1000g")}
            />
          </SectionSellCoffe>

          <SectionSellCoffe 
            id={"grind_coffe"}
            title={"Voulez vous qu'on les broie ? "}
            action={grind_coffee}
          >
            <CardSellCoffe
              title={"Grains entiers"}
              body={
                "Le meilleur choix si vous chérissez l’expérience sensorielle complète"
              }
              response={"grind_coffe"}
              action={grind_coffee_value("Grains entiers")}
            />
            <CardSellCoffe
              title={"Filtre"}
              body={
                "Pour les méthodes de café goutte à goutte ou verseur telles que V60 ou Aeropress"
              }
              response={"grind_coffe"}
              action={grind_coffee_value("Filtre")}
            />
            <CardSellCoffe
              title={"Cafetiére"}
              body={
                "Grains moulus spécialement adaptés au café à presse française"
              }
              response={"grind_coffe"}
              action={grind_coffee_value("Cafetiére")}
            />
          </SectionSellCoffe>

          <SectionSellCoffe
            id={"delivery_coffee"}
            title={"À quelle fréquence devons-nous livrer ?"}
            action={delivery_coffee}
          >
            <CardSellCoffe
              title={"Toutes les semaines"}
              body={
                "7,20 $ par envoi. Comprend la livraison gratuite en première classe."
              }
              response={"delivery_coffee"}
              action={deliverey_coffe_value("Toutes les semaines")}
            />
            <CardSellCoffe
              title={"Toutes les 2 semaines"}
              body={
                "9,60 $ par envoi. Comprend la livraison prioritaire gratuite."
              }
              response={"delivery_coffee"}
              action={deliverey_coffe_value("Toutes les 2 semaines")}
            />
            <CardSellCoffe
              title={"Chaque mois"}
              body={
                "12,00 $ par envoi. Comprend la livraison prioritaire gratuite."
              }
              response={"delivery_coffee"}
              action={deliverey_coffe_value("Chaque mois")}
            />
          </SectionSellCoffe>
        </div>
      </section>
      <section className="orded-result">
        <Orded displayCheickout={setdisplayCheickoutComponent} />
      </section>
      {displayCheickoutComponent && (
        <CheickoutOrder HidecheickoutComponent={setdisplayCheickoutComponent} />
      )}
    </div>
  );
}
