import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {

  // messagesRepo: MessagesRepository;

  constructor(public messagesRepo: MessagesRepository) {
    // Service is creating its own dependencies
    // DO NOT DO THIS IN REAL PROJECT
    // this.messagesRepo = new MessagesRepository();

    //line 5 and 12 are commented out because of line 7 (public)
    // this.messagesRepo =  messagesRepo;

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
