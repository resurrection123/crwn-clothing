//reselect 
//crea per  noi questo concetto di selettore memorizzato
//memorizzqazione è il processo in cui si memorizza nella cache il valore del valore precedente di qualcosa
//in modo che se l'inuput non è cambiato, restituisce lo stesso output
//è necessario creare due selettori, uno di input e l'altro di output
import { createSelector } from 'reselect'

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesSlice = createSelector(
  //selettore di input
  [selectCategoryReducer],
  //output selector
  //verrà eseguita solo se selectCategoryReducer è diverso
  //se rimane uguale sappiamo che la cache precedente sarà sufficiente 
  (categoriesSlice) => categoriesSlice.categories

);
export const selectCategories = createSelector(
  [selectCategoriesSlice],
  (state) => state.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)
export const selectFetchStatus = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
