import { UPDATE_CARD_DETAILS } from "../types";

const initialState = {
  cardDetails: {
    title: "",
    overview: "",
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_CARD_DETAILS:
      return { ...state, cardDetails: payload };

    default:
      return state;
  }
};
