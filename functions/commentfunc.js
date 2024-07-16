export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    
    await MYKVSTORE.put('counter',value);
    return new Response(value);
}
