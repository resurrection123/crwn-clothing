export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action) {
    return next(action);
  }
  console.log('type', action.type)
  console.log('payload', action.payload)
  console.log('store', store.getState());
  //passiamo l'action, quindi lo state verrà modificato
  next(action);
  //nuovo state
  console.log("next state", store.getState());


}