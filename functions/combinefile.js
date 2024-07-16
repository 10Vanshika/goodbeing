export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const myaction = searchParams.get('mgfuyaction');

    let counterValue = await MYKVSTORE.get('counter');
    counterValue = parseFloat(counterValue) || 0;

    if (myaction ==='increment') {
        counterValue += 1;
    } else if(myaction === 'decrement'){
        counterValue -= 1;
    } else if(myaction ==='half'){
        counterValue = counterValue/2;
    } else if (myaction ==='double'){
        counterValue = counterValue*2;
    } else if(myaction === 'reset'){
        counterValue = 0;
    } else if (myaction == 'getvalue') {
        return new Response(counterValue);
    }

    await MYKVSTORE.put('counter',counterValue);
    return new Response(counterValue);
}

