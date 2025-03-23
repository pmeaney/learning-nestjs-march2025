import { MessagesRepository } from "./messages.repository";

export class MessagesService {
  /**
  This:
  messagesRepo: MessagesRepository;

  constructor(messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }
  
  Automagically equates to this:
    constructor(public messagesRepo: MessagesRepository) {}

  
  */

  constructor(public messagesRepo: MessagesRepository) { }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
