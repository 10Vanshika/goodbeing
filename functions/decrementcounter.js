export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('Decrement');
    counterValue = parseInt(counterValue) || 0;
    counterValue -= 1;
    await MYKVSTORE.put('Decrement', counterValue);
    return new Response(counterValue);
}