// Cloudflare Worker Script
export async function onRequest(context) {
    console.log("Function started")
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('comment');
    console.log(action);

    if (action === 'message') {
        console.log("line 2")
        try {
            
            // Store the message in KV store with a unique key
            const messageKey = document.getElementById('commentInput').value;
            console.log(messageKey);
            await MYKVSTORE.put('comment', messageKey);
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

