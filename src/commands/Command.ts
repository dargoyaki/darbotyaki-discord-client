import { Message } from 'discord.js';

export abstract class Command {
    public name: string;
    public description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public abstract execute(message: Message, args: string[]): void;
}
