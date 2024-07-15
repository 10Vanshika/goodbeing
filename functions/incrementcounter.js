export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    let counterValue = await MYKVSTORE.get('Counter');
    counterValue = parseInt(counterValue) || 0;
    counterValue += 1;
    await MYKVSTORE.put('Counter', counterValue);
    return new Response(counterValue);
}