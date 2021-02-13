import { UPDATE_CARD_DETAILS } from "../types";

export const updateCardDetails = (payload) => ({
  type: UPDATE_CARD_DETAILS,
  payload,
});
