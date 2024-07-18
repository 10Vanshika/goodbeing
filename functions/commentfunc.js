// Cloudflare Worker Script
export async function onRequest(context) {
    console.log("Function started")
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('comment');

    if (action === 'message') {
        try {
            // Parse the request body
            const requestBody = await context.request.json();
            const message = requestBody.message;

            if (!message) {
                return new Response('Message is required', { status: 400 });
            }

            // Store the message in KV store with a unique key
            const messageKey = 'message';
            await MYKVSTORE.put(messageKey, message);

            return new Response('Message saved successfully', { status: 200 });
        } catch (error) {
            return new Response('Invalid request', { status: 400 });
        }
    } else {
        return new Response('Invalid action', { status: 400 });
    }
}

