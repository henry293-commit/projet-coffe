import "./AboutUs.css";
import { CardWithImage } from "../../component/section-engagement/cardWithImage";
import { Footer } from "../../component/footer/footer";
import { CardAbout } from "../../component/card-coffe/cardAbout";
import image_quality_phone from "../../assets/about/mobile/image-quality.jpg";
import image_quality_tablet from "../../assets/about/tablet/image-quality.jpg";
import image_quality_desktop from "../../assets/about/desktop/image-quality.jpg";
import image_australia from "../../assets/about/desktop/illustration-australia.svg";
import image_canada from "../../assets/about/desktop/illustration-canada.svg";
import image_uk from "../../assets/about/desktop/illustration-uk.svg";
import { CoffeCollection } from "../../component/Coffe-collection/type_coffe";
export function AboutUS() {
  return (
    <div className="container-about">
      <section className="about-card">
        <CardWithImage />
      </section>
      <section className="explain-quanlity">
        <CardAbout
          title={"Une qualité sans compromis"}
          body={
            "Bien que nous travaillions avec des producteurs qui accordent une attention particulière à toutes les étapes de la récolte et de la transformation, nous appliquons, de notre côté, un programme de contrôle de qualité rigoureux pour éviter de trop torréfier ou de cuire le café à sec. Chaque sac de café est étiqueté avec une date de torréfaction et un numéro de lot. Notre objectif est de torréfier un café homogène et convivial, afin que l'infusion soit facile et agréable."
          }
        />
        <div className="explain-quanlity-image">
          <picture>
            <source
              media="(min-width: 1180px)"
              srcset={image_quality_desktop}
            />
            <source media="(min-width: 768px)" srcset={image_quality_tablet} />
            <img src={image_quality_phone} alt="" />
          </picture>
        </div>
      </section>
      <section className="headquarters">
		<h1 className="headquarters-title">Nos sièges socials</h1>
       <div className="adresses">
	   <CoffeCollection
          img={image_uk}
          title={"Royaume-Uni"}
          lacated={{
            street: "68  Asfordby Rd",
            city: "Alcaston",
            postal: "SY6 1YA",
            cell: "+44 1241 918425",
          }}
		  
        />
		 <CoffeCollection
          img={image_canada}
          title={"Canada"}
          lacated={{
            street: "528 Eglinton Avenue",
            city: "Toronto ",
            postal: "Ontario M4P",
            cell: "1A6 +1 416 485 2997",
          }}
		  
        />
		 <CoffeCollection
          img={image_australia}
          title={"Australie"}
          lacated={{
            street: "36 Swanston Street",
            city: "Kewell ",
            postal: "Victoria ",
            cell: "+61 4 9928 3629",
          }}
		  
        />
	   </div>
      </section>
    </div>
  );
}
