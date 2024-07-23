export default {
    async fetch(request) {
        try {
            const response = await fetch('burgerslicy.com');
            const data = await response.json();
            return new Response(JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            return new Response('Error fetching data', { status: 500 });
        }
    }
};
