import {
  ADD_SAVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  REMOVE_SERVICE,
  RESET_FIELDS,
} from './actionsType';

export function addSaveService(item) {
  return { type: ADD_SAVE_SERVICE, payload: item };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function resetFields() {
  return { type: RESET_FIELDS };
}

export function editService(item) {
  return { type: EDIT_SERVICE, payload: item };
}
