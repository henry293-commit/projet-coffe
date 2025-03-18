import './cardWithImage.css'
import image_commitment_phone from '../../assets/about/mobile/image-commitment.jpg' 
import image_commitment_tablet from '../../assets/about/tablet/image-commitment.jpg' 
import image_commitment_desktop from '../../assets/about/desktop/image-commitment.jpg' 
export function CardWithImage(){
	return(
		<div className='cardWithImage-container'>
			<div className="cardWithImage-card-image">
				<picture>
					<source  media="(min-width:768px)" srcSet={image_commitment_tablet} />
					<source media="(min-width: 1000px)" srcset={image_commitment_desktop} />
					<img src={image_commitment_phone} alt="Image d'une personne faisant cafe " />
				</picture>
			</div>
			<div className="cardWithImage-card-content">
				<strong className='cardWithImage-card-title'>Notre engagement</strong>
				<p className='cardWithImage-card-body'>
				Nous sommes bâtis sur une mission simple et un engagement à faire le bien tout au long du chemin. Nous voulons vous permettre de découvrir et de préparer facilement le meilleur café du monde à la maison. Tout commence à la source. Pour localiser les lots spécifiques que nous souhaitons acheter, nous voyageons près de 60 jours par an pour essayer de comprendre les défis et les opportunités de chacun de ces lieux. Nous collaborons avec des producteurs de café exceptionnels et responsabilisons une communauté mondiale d'agriculteurs grâce à des normes bien supérieures au commerce équitable. Nous proposons également des formations, soutenons les initiatives des communautés agricoles et investissons dans la science des plants de café. En sélectionnant uniquement les meilleurs mélanges, nous torréfions chaque lot pour mettre en valeur les profils de dégustation distinctifs de leur région de culture d'origine.
				</p>
			</div>
		</div>
	)
}