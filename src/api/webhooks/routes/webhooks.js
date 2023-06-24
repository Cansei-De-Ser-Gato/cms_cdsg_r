module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/webhooks/pedido-loja-integrada',
     handler: 'webhooks.pedidoLI',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
