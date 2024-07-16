export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = 0;
    await MYKVSTORE.put('counter', counterValue);
    return new Response(counterValue);
  }  