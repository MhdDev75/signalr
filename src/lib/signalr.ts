import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';



const connection: HubConnection = new HubConnectionBuilder()
    .withUrl("http://localhost:7001/hubs/openai", {
        accessTokenFactory: () => Promise.resolve("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImNhYjM5Y2UyLTMxMGMtNDEzNC05MWEzLTA4ZjYyNTgyMmU2ZiIsImV4cCI6MTczNzQ3MTc3MSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoyODc0Ny8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjI4NzQ3LyJ9.nqrERDRUVC5XBkD0z8Vaj7r0OaWIqkZeemLX4f0n7C4")
    })
    .build();

export const startConnection = async () => {
    try {
        await connection.start();
        console.log("Connected to hub");
    } catch (err) {
        console.error("Connection failed: ", err);
        setTimeout(startConnection, 5000);
    }
};

export const sendMessage = async (message: string) => {
    try {
        await connection.invoke("SendMessage", message);
        console.log("Message sent: ", message);
    } catch (err) {
        console.error("Failed to send message: ", err);
    }
};

export default connection;
