import { Message } from "discord.js";
import { Command } from "./Command";

export class PingCommand extends Command {
    constructor() {
        super(
            'ping', 'ping'
        )
    }

    execute(message: Message, args: string[]): void {
        message.channel.send(`Pong! ${message.author.toString()}`);
    }
}

export function instantiate(): Command {
    return new PingCommand();
}
