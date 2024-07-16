export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('action');
if(action === 'comment'){

    await MYKVSTORE.put('counter',value);
    return new Response(value);
}
}