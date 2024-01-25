import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    // {
    // 	12: {id: 12, content: 'asdf'}
    // }

    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));
  }

  async delete(id: string) {
    // Read the existing messages
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    // Check if the message with the given ID exists
    if (messages[id]) {
      // Delete the message
      delete messages[id];

      await writeFile('messages.json', JSON.stringify(messages));
    } else {
      throw new Error(`Message with ID ${id} not found`);
    }
  }

  // MessagesRepository class

  async deleteAll() {
    // This will overwrite the file with an empty object, effectively deleting all messages
    await writeFile('messages.json', JSON.stringify({}));
  }
}
