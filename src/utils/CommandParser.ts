import { Message } from 'discord.js';
import { COMMAND_PREFIX } from './constants';

export interface CommandArgs {
    command: string | undefined;
    args: string[];
}

export class CommandParser {
    constructor() {}

    public parseCommand(message: Message): CommandArgs {
        const args = message.content.slice(COMMAND_PREFIX.length).trim().split(/ +/);
        const commandName = args.shift();

        if (commandName === undefined) {
            return {
                command: undefined,
                args: [],
            };
        }

        return {
            command: commandName.toLowerCase(),
            args,
        };
    }
}
