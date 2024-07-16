export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { request } = context;
    const url = new URL(request.url);
    const action = url.searchParams.get('action');
    let responseContent = '';

    if (request.method === 'POST' && action === 'addComment') {
        const comment = await request.text();
        let comments = await MYKVSTORE.get('comments');
        comments = comments ? JSON.parse(comments) : [];
        comments.push(comment);
        await MYKVSTORE.put('comments', JSON.stringify(comments));
        responseContent = 'Comment added successfully';
    } else if (request.method === 'GET' && action === 'getComments') {
        let comments = await MYKVSTORE.get('comments');
        responseContent = comments ? comments : '[]';
    } else {
        responseContent = 'Invalid request';
    }

    return new Response(responseContent, {
        headers: { 'Content-Type': 'application/json' }
    });
}
