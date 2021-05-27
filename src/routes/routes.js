const apiRoutes = {
  getAllCovidInfo: '/usa',
  getStateCovidInfo: (state) => `/states/${state}?lastdays=all`
}

const internalRoutes = {
  root: '/',
  state: '/state'
}

export { apiRoutes, internalRoutes };