'use strict';

/**
 * A set of functions called "actions" for `webhooks`
 */

module.exports = {
  pedidoLI: async (ctx, next) => {
    const { token, tipo, id, numero, data_criacao, situacao } = ctx.request.body
    
    try {
      if(token && situacao.situacao_alterada){
        //const entity = await strapi.entityService.findOne('api::order.order')        
        const entry = await strapi.entityService.create('api::order.order',{
          data:{
            order_id: id.toString(),
            order_raw: ctx.request.body,
            order_data: data_criacao,
            status: situacao.codigo,
            publishedAt: new Date().toISOString()      
          }
        });
        ctx.body = entry;
      }else{
        ctx.body = 'Where is the content?'
      }      
    } catch (err) {
      ctx.body = err;
    }
  }
};
