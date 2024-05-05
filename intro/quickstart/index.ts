import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const text = figlet.textSync("ceoDemitri!");
        return new Response(text);
    },
})

console.log(`Listening on http://localhost:${server.port} ...`);