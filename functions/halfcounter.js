export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('counter');
    counterValue = parseFloat(counterValue) || 0;
    counterValue = counterValue/2;
    await MYKVSTORE.put('counter', counterValue);
    return new Response(counterValue);
}