import { TelegramClient } from 'telegram'
import { StoreSession } from 'telegram/sessions/index.js'

import input from 'input'

// .env files
import dotenv from 'dotenv'
dotenv.config()
const { API_ID, API_HASH } = process.env

const apiId = API_ID
const apiHash = API_HASH

const session = new StoreSession('.session')

const run = async () => {
  const client = new TelegramClient(session, apiId, apiHash, {
    connectionRetries: 5,
  })

  await client.start({
    phoneNumber: async () => await input.text('Please enter your number (with country code):'),
    password: async () => await input.text('Please enter your password:'),
    phoneCode: async () => await input.text('Please enter the code you received:'),
    onError: (err) => console.log(err),
  })

  try {
    await client.sendMessage('me', { message: 'Hello from Telegram API!' })
  } catch (e) {
    console.log(e)
  }
}

// run via run
run()
