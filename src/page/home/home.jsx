import { CoffeCollection } from "../../component/Coffe-collection/type_coffe";
import gran_img from "../../assets/home/desktop/image-gran-espresso.png";
import piccolo_img from "../../assets/home/desktop/image-piccollo.png";
import planalto_img from "../../assets/home/desktop/image-planalto.png";
import danch_img from "../../assets/home/desktop/image-danche.png";
import icon_coffe from "../../assets/home/desktop/icon-coffee-bean.svg";
import icon_gift from "../../assets/home/desktop/icon-gift.svg";
import icon_truck from "../../assets/home/desktop/icon-truck.svg";

import "./home.css";
import { CardAbout } from "../../component/card-coffe/cardAbout";
import { CardWork } from "../../component/card-work-coffe/cardWork";
import { Link } from "react-router-dom";
import { Footer } from "../../component/footer/footer";
export function Home() {
  return (
    <div className="Container Container-home">
      <div className="collection">
        <div className="collection-title">
          <strong>Notre collection</strong>
        </div>
        <div className="collection-items">
          <CoffeCollection
            img={gran_img}
            title={"Gran Espresso"}
            body={
              "Mélange léger et savoureux avec du cacao et du poivre noir pour une expérience intense"
            }
          />
          <CoffeCollection
            img={planalto_img}
            title={"Planalto"}
            body={
              "Torréfaction foncée brésilienne au corps riche et velouté, avec des notes de fruits et de noix"
            }
          />
          <CoffeCollection
            img={piccolo_img}
            title={"Piccollo"}
            body={
              "Mélange doux et onctueux aux notes d'amande grillée et de cerise séchée"
            }
          />
          <CoffeCollection
            img={danch_img}
            title={"Danche"}
            body={
              "Mélange éthiopien récolté à la main, densément rempli de notes fruitées vibrantes"
            }
          />
        </div>
      </div>

      <div className="card-explain">
        <CardAbout
          title={"Pourquoi nous choisir?"}
          body={
            "Une grande partie de notre rôle consiste à choisir quels cafés particuliers figureront dans notre gamme. Cela signifie travailler en étroite collaboration avec les meilleurs producteurs de café pour vous offrir une expérience plus percutante à tous les niveaux."
          }
        />
        <div className="home-card-about">
          <CoffeCollection
            img={icon_coffe}
            title={"Meilleure qualité"}
            body={
              "Découvrez une variété infinie du meilleur café artisanal au monde produit par chacun de nos torréfacteurs."
            }
          />
          <CoffeCollection
            img={icon_gift}
            title={"Avantages exclusifs"}
            body={
              "Offres spéciales et cadeaux lors de votre abonnement, dont 30 % de réduction sur votre premier envoi."
            }
          />
          <CoffeCollection
            img={icon_truck}
            title={"Livraison gratuite"}
            body={
              "Nous prenons en charge les frais et le café est livré rapidement. Fraîcheur maximale : garantie."
            }
          />
        </div>
      </div>
      <div className="section-work">
        <strong className="section-work-title">Comment ça fonctionne</strong>
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
        <Link to={"plan"} className="btn btn-work">
          Créez votre plan
        </Link>
      </div>
      <div className="footer">
      </div>
    </div>
  );
}
