import { createAction } from "@reduxjs/toolkit";


// pending (запрос в процессе)
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// fulfilled (успешный запрос)
export const fetchContactsSuccess = createAction('books/fetchContactsSuccess');
// rejected (запрос с ошибкой)
export const fetchContactsError = createAction('books/fetchContactsError');