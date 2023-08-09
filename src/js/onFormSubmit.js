import { api } from './api';
const apiInst = new api();
export async function onFormSubmit(e) {
  try {
    e.preventDefault();
    apiInst.resetPages();
    apiInst.query = e.currentTarget.elements.searchQuery.value.trim();
    await apiInst.allIn();
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
}
