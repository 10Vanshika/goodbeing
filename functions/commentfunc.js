export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('action');
if(action === 'comment'){
    try {
        // Extract the value from the request body
        const requestBody = await context.request.text();
        const requestData = JSON.parse(requestBody);
        const value = requestData.value;

        if (!value) {
            return new Response('Missing comment value', { status: 400 });
        }

        // Store the comment in the key-value store
        await MYKVSTORE.put('comment', value);
        
        // Return the stored value as the response
        return new Response(value);
    } catch (error) {
        return new Response('Invalid request body', { status: 400 });
    }
} else {
    return new Response('Invalid action', { status: 400 });
}
}