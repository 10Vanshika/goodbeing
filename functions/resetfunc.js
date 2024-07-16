export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('reset');
    return new Response(counterValue);
  }  