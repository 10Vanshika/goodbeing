export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('counter');
    counterValue = parseFloat(counterValue) || 0;
    counterValue += 1;
    await MYKVSTORE.put('counter', counterValue);
    return new Response(counterValue);
}