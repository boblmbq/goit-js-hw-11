import { search, params } from './base-url';

export async function searchByInput(input) {
  let pageInt = 1;
  params.set('q', input);
  params.set('page', pageInt);
  pageInt += 1;
  const searching = await search.get(`?${params}`);
  return searching;
}
