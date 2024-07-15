export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const counterValue = await MYKVSTORE.get('Counter');
    return new Response(counterValue || 'Key not found', {
      headers: { 'content-type': 'text/plain' },
    });
  }  