import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  // messagesService: MessagesService;
  constructor(
    public messagesService: MessagesService,
    // public messagesService2: MessagesService,
    // public messagesService3: MessagesService,
    // only 1 instance of Service is created regardless of how many copies we ask for  there are other ways to avoid this limitation

    
    // dependency injection and inversion control helps during testing the app
  ) 
  {
    // console.log(messagesService === messagesService2)
    // console.log(messagesService === messagesService3)
    // DO NOT DO THIS IN REAL PROJECT
    // USE DEPENDENCY INJECTION
    //line 15 and 21 are commented out because of line 7 (public)
    // this.messagesService = new MessagesService();
  }
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
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
