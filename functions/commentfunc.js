export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('comment');
    counterValue = parseFloat(counterValue) || 0;
    await MYKVSTORE.put('comment',counterValue)
    return new Response(counterValue);
  }  