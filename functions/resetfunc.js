export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = 0;
    return new Response(counterValue);
  }  