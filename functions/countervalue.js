export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const counterValue = await MYKVSTORE.get('counter');
    return new Response(counterValue);
  }  