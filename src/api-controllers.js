import endpoints from './endpoints'

export const recipes = {
  create: (body) =>
    fetch(endpoints.recipes, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  }),
  fetchAll: () => fetch(endpoints.recipes),
  update: (body) =>
    fetch(`${endpoints.recipes}/${body._id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
  ,
  delete: (id) =>
      fetch(`${endpoints.recipes}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
}
