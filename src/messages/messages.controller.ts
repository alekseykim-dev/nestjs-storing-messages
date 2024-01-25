import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;
  constructor() {
    // DO NOT DO THIS IN REAL PROJECT
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content)
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id)
  }

  @Delete('/:id')
  deleteMessage(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }
 
  @Delete()
  deleteAllMessages() {
    return this.messagesService.deleteAll();
  }

}
