import { Collection, Message } from 'discord.js';
import * as fs from 'fs';
import { Command } from '../commands/Command';
import { CommandArgs, CommandParser } from '../utils/CommandParser';
import { COMMAND_PREFIX } from '../utils/constants';

export class CommandHandler {
    private _commands: Collection<String, Command>;
    private _parser: CommandParser;

    constructor() {
        this._commands = new Collection();
        this._parser = new CommandParser();
    }

    public setup(): void {
        const commandFiles = fs.readdirSync(__dirname + '/../commands').filter(
            (file) => {
                return (file.endsWith('.js') || file.endsWith('.ts'))
                    && (file !== 'Command.ts' && file !== 'Command.js');
            },
        );

        for (const file of commandFiles) {
            const dependency = require(__dirname + `/../commands/${file}`);
            const command: Command = dependency.instantiate();
            this._commands.set(command.name, command);
        }
    }

    public handle(message: Message): void {
        if (!message.content.startsWith(COMMAND_PREFIX) || message.author.bot) { return; }
        const commandArgs: CommandArgs = this._parser.parseCommand(message);

        if (commandArgs.command === undefined) {
            message.reply('No Command Found');
            return;
        }

        const command = this._commands.get(commandArgs.command);

        if (command === undefined) {
            message.reply('No Command Found');
            return;
        }

        try {
            command.execute(message, commandArgs.args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}
