export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const counterValue = await MYKVSTORE.get('Decrement');
    return new Response(counterValue);
  }  