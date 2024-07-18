// Cloudflare Worker Script
export async function onRequest(context) {
    console.log("Function started")
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('comment');

    if (action === 'message') {
        console.log("line 2")
        try {
            // Parse the request body
            const requestBody = await context.request.json();
            console.log("line 3")
            const message = requestBody.message;
            console.log("line 4")
            if (!message) {
                console.log("line 5")
                return new response('Message is required', { status: 400 });
                console.log("line 6")
            }

            // Store the message in KV store with a unique key
            const messageKey = 'message';
            console.log("line 7")
            await MYKVSTORE.put(messageKey, message);
            console.log("line 8")

            return new Response('Message saved successfully', { status: 200 });
            console.log("line 9")
        } catch (error) {
            console.log("line 10")
            return new Response('Invalid request', { status: 400 });
            console.log("line 11")
        }
    } else {
        console.log("line 12")
        return new Response('Invalid action', { status: 400 });
    }
}

