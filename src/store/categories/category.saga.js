import { all, call, put, take, takeLatest } from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utilis';
import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';



export function* fetchCategoriesAsync() {
  try {
    //ogni volta che vogliamo effettuare una chiamata,è necessario utilizzare call poiché è necessario che ritorini un effetto
    //ovunque ci sia una funzione e vuoi trasformarla in un effetto bisogna utilizzare "call"
    const categoriesArray = yield call(getCategoriesAndDocuments);
    // dispatch(fetchCategoriesSuccess(categoriesArray));
    yield put(fetchCategoriesSuccess(categoriesArray))

  } catch (error) {
    yield put(fetchCategoriesFailed(error))

  }
}

export function* onFetchCategories() {
  /*   take è dove riceviamo le azioni 
    se viene attivata una serie di azioni con lo stesso tipo 
    redux saga si prenderà cura di eseguire solo l'ultima azione
    prende due argomenti 
    1.tipo di azione da effettuare
    2.cio che vuoi che accada al verificarsi di quello specifico tipo
    */
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}
export function* categoriesSaga() {
  //esegui tutto dentro e completa solo quando tutto è finito
  //yield è come await, tutte le operazioni indicate di saeguito verranno eseguite dopo
  //alll permette di eseguire più effettti contemporaneamente o attendere che unn gruppo di saghe si completi prima di procedere 
  yield all([call(onFetchCategories)]);
}