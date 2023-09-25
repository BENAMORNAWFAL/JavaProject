import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class ChatService {
    private storageKey = 'chatMessages';
    private messages: { sender: string; text: string }[] = [];
  
    constructor() {
      // Retrieve chat messages from localStorage on service initialization
      const storedMessages = localStorage.getItem(this.storageKey);
      if (storedMessages) {
        this.messages = JSON.parse(storedMessages);
      }
    }
  
    getMessages() {
      return this.messages;
    }
  
    addMessage(sender: string, text: string) {
      this.messages.push({ sender, text });
  
      // Save chat messages to localStorage whenever a new message is added
      localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
    }
    deleteMessage(messageToDelete: { sender: string; text: string }) {
      // Find the index of the message to delete
      const index = this.messages.findIndex(
        (message) =>
          message.sender === messageToDelete.sender && message.text === messageToDelete.text
      );
  
      if (index !== -1) {
        // Remove the message from the array
        this.messages.splice(index, 1);
  
        // Update the messages in localStorage
        localStorage.setItem(this.storageKey, JSON.stringify(this.messages));
      }
    }
    
}