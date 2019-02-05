export const UPDATE_ITEMS_LIST = 'UPDATE_ITEMS_LIST';
export const SEARCH_FORM_INPUT = 'SEARCH_FORM_INPUT';


export const searchFormOnInputChangeAction = (searchKey) =>{
    return { type: SEARCH_FORM_INPUT, searchKey: searchKey};
}

export const updateItemsList = (itemsList) => {
    return { type: UPDATE_ITEMS_LIST, payload: itemsList}
}
