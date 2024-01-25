import { MessagesRepository } from './messages.repository';

export class MessagesService {

  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DO NOT DO THIS IN REAL PROJECT
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

  delete(id: string) {
    return this.messagesRepo.delete(id);
  }

  // MessagesService class

  deleteAll() {
    return this.messagesRepo.deleteAll();
  }
}
