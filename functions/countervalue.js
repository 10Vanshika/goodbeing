const counterValue = await MYKVSTORE.get('Counter')
return new Response(counterValue)