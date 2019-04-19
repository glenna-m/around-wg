import * as ActionTypes from "../ActionTypes";

export const addFeedback = (
  firstname,
  lastname,
  phone,
  email,
  okToContact,
  message
) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: {
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email,
    okToContact: okToContact,
    message: message
  }
});
