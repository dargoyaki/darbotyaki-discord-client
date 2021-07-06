import * as dotenv from 'dotenv';
import { BotClient } from './client/BotClient';

dotenv.config();

const client = new BotClient();

client.setup();
client.login(process.env.TOKEN);
