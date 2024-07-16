export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('counter');
    return new Response(counterValue);
  }  