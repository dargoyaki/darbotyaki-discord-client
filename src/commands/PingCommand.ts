import { Message } from 'discord.js';
import { Command } from './Command';

export default class PingCommand extends Command {
    constructor() {
        super(
            'ping', 'ping',
        );
    }

    public execute(message: Message, args: string[]): void {
        message.channel.send(`Pong! ${message.author.toString()}`);
    }
}
