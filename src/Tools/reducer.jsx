const initialeState = {
  how_drink: {
    value: "",
    bol: true,
  },
  type_coffee: {
    value: "",
    bol: false,
  },
  how_much_coffee: {
    value: "",
    bol: false,
  },
  grind_coffe: {
    value: "",
    bol: false,
  },
  delivery_coffee: {
    value: "",
    bol: false,
  },
};

// les preimere vconstante sont des bolean et comporte des valeur
 const HOW_DRINK_BOL = "HOW_DRINK_BOL";
 const HOW_DRINK_VALUE = "HOW_DRINK_VALUE";

 const TYPE_COFFEE_BOL = "TYPE_COFFEE_BOL";
 const TYPE_COFFEE_VALUE = "TYPE_COFFEE_VALUE";

 const HOW_MUCH_COFFEE_BOL = "HOW_MUCH_COFFEE_BOL";
 const HOW_MUCH_COFFEE_VALUE = "HOW_MUCH_COFFEE_VALUE";

 const GRIND_COFFEE_BOL = "GRIND_COFFEE_BOL";
 const GRIND_COFFEE_VALUE = "GRIND_COFFEE_VALUE";

 const DELIVERY_COFFEE_BOL = "DELIVERY_COFFEE_BOL";
 const DELIVERY_COFFEE_VALUE = "DELIVERY_COFFEE_VALUE";

export const how_drink = () => {
  return { type: HOW_DRINK_BOL };
};
export const how_drink_value = (val) => {
  return { type: HOW_DRINK_VALUE, payload: val };
};

export const type_coffee = () => {
  return { type: TYPE_COFFEE_BOL };
};
export const type_coffee_value = (val) => {
  return { type: TYPE_COFFEE_VALUE, payload: val };
};

export const how_much_coffee = () => {
  return { type: HOW_MUCH_COFFEE_BOL };
};
export const how_much_coffee_value = (val) => {
  return { type: HOW_MUCH_COFFEE_VALUE, payload: val };
};

export const grind_coffee = () => {
  return { type: GRIND_COFFEE_BOL };
};
export const grind_coffee_value = (val) => {
  return { type: GRIND_COFFEE_VALUE, payload: val };
};

export const delivery_coffee = () => {
  return { type: DELIVERY_COFFEE_BOL };
};
export const deliverey_coffe_value = (val) => {
  return { type: DELIVERY_COFFEE_VALUE, payload: val };
};

export const reducer = (state = initialeState, action) => {
  switch (action.type) {
    case HOW_DRINK_BOL:
      return {
        ...state,
        how_drink: { ...state.how_drink, bol: !state.how_drink.bol },
      };
    case HOW_DRINK_VALUE:
      return {
        ...state,
        how_drink: { ...state.how_drink, value: action.payload },
      };
    case TYPE_COFFEE_BOL:
      return {
        ...state,
        type_coffee: { ...state.type_coffee, bol: !state.type_coffee.bol },
      };
    case TYPE_COFFEE_VALUE:
      return {
        ...state,
        type_coffee: { ...state.type_coffee, value: action.payload },
      };
    case HOW_MUCH_COFFEE_BOL:
      return {
        ...state,
        how_much_coffee: {
          ...state.how_much_coffee,
          bol: !state.how_much_coffee.bol,
        },
      };
    case HOW_MUCH_COFFEE_VALUE:
      return {
        ...state,
        how_much_coffee: { ...state.how_much_coffee, value: action.payload },
      };
    case GRIND_COFFEE_BOL:
      return {
        ...state,
        grind_coffe: { ...state.grind_coffe, bol: !state.grind_coffe.bol },
      };
    case GRIND_COFFEE_VALUE:
      return {
        ...state,
        grind_coffe: { ...state.grind_coffe, value: action.payload },
      };
    case DELIVERY_COFFEE_BOL:
      return {
        ...state,
        delivery_coffee: {
          ...state.delivery_coffee,
          bol: !state.delivery_coffee.bol,
        },
      };
    case DELIVERY_COFFEE_VALUE:
      return {
        ...state,
        delivery_coffee: { ...state.delivery_coffee, value: action.payload },
      };
    default:
      return state;
  }
};
