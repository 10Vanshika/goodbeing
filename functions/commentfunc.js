export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('action');

    if (action === 'saveMessage') {
        try {
            // Extract the message from the request body
            const requestBody = await context.request.text();
            const requestData = JSON.parse(requestBody);
            const message = requestData.message;

            if (!message) {
                return new Response('Missing message', { status: 400 });
            }

            // Generate a unique key for the message (e.g., using timestamp)
            const messageKey = `message-${Date.now()}`;

            // Store the message in the key-value store
            await MYKVSTORE.put(messageKey, message);

            // Return a success response
            return new Response('Message saved successfully', { status: 200 });
        } catch (error) {
            return new Response('Invalid request body', { status: 400 });
        }
    } else {
        return new Response('Invalid action', { status: 400 });
    }
}
