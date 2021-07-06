import { BotClient } from './client/BotClient';
import * as dotenv from 'dotenv';

dotenv.config(); 

const client = new BotClient();

client.setup(); 
client.login(process.env.TOKEN);
