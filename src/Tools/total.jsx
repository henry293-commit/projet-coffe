import { useSelector } from "react-redux";

export function Totalorder() {
  const TheReduceur = useSelector((state) => state);
  let Total = 0;

  switch (TheReduceur.how_much_coffee.value) {
    case "250g":
      switch (TheReduceur.delivery_coffee.value) {
        case "Toutes les semaines":
          Total = 7.2 * 4;
          return Total;
        case "Toutes les 2 semaines":
          Total = 9.60 * 2;
          return Total;
        case "Chaque mois":
          Total = 12.00 * 1;
          return Total;
        default:
          return Total;
      }
	case "500g":
		switch (TheReduceur.delivery_coffee.value) {
			case "Toutes les semaines":
			  Total = 13.00* 4;
			  return Total;
			case "Toutes les 2 semaines":
			  Total = 17.50 * 2;
			  return Total;
			case "Chaque mois":
			  Total = 22.00 * 1;
			  return Total;
			default:
			  return Total;
		  }
	case "1000g":
		switch (TheReduceur.delivery_coffee.value) {
			case "Toutes les semaines":
			  Total = 22.00* 4;
			  return Total;
			case "Toutes les 2 semaines":
			  Total = 32.00 * 2;
			  return Total;
			case "Chaque mois":
			  Total = 42.00 * 1;
			  return Total;
			default:
			  return Total;
		  }	  
	default :
		return Total  
  }
  return Total;
}
