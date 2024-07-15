export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('counter');
    counterValue = parseFloat(counterValue) || 0;
    return new Response(counterValue);
  }  