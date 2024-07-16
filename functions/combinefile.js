export async function onRequest(context) {
    const { MYKVSTORE } = context.env;
    const { searchParams } = new URL(context.request.url);
    const action = searchParams.get('action');

    let counterValue = await MYKVSTORE.get('counter');
    counterValue = parseFloat(counterValue) || 0;

    if (action === 'increment') {
        counterValue += 1;
        await MYKVSTORE.put('counter', counterValue);
    } else if(action === 'decrement'){
        counterValue -= 1;
        await MYKVSTORE.put('counter', counterValue);   
    }else if(action === 'half'){
        counterValue = counterValue/2;
        await MYKVSTORE.put('counter', counterValue); 
    }else if (action === 'double'){
        counterValue = counterValue*2;
        await MYKVSTORE.put('counter', counterValue); 
    }
    else{
        counterValue === 0;
        await MYKVSTORE.put('counter',counterValue);
    }
    return new Response(counterValue);
}
