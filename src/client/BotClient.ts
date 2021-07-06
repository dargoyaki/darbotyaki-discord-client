import { Client } from 'discord.js';
import { CommandHandler } from '../handlers/CommandHandler';

export class BotClient {
    private _client: Client; 
    private _commandHandler: CommandHandler;

    constructor() {
        this._client = new Client();
        this._commandHandler = new CommandHandler();
    }

    setup(): void {
        this._commandHandler.setup(); 

        this._client.once('ready', () => console.log('Starting...'));
        this._client.on('message', (message) => this._commandHandler.handle(message));
    }

    login(token: string | undefined): void {
        this._client.login(token);
    } 
}