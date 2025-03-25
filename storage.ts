import { 
  users, 
  type User, 
  type InsertUser, 
  prayerRequests, 
  type PrayerRequest, 
  type InsertPrayerRequest,
  contactMessages,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Prayer Request methods
  createPrayerRequest(prayerRequest: InsertPrayerRequest): Promise<PrayerRequest>;
  getPrayerRequests(): Promise<PrayerRequest[]>;
  
  // Contact methods
  createContactMessage(contactMessage: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private prayerRequests: Map<number, PrayerRequest>;
  private contactMessages: Map<number, ContactMessage>;
  currentUserId: number;
  currentPrayerRequestId: number;
  currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.prayerRequests = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentPrayerRequestId = 1;
    this.currentContactMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createPrayerRequest(insertPrayerRequest: InsertPrayerRequest): Promise<PrayerRequest> {
    const id = this.currentPrayerRequestId++;
    const createdAt = new Date();
    const prayerRequest: PrayerRequest = { ...insertPrayerRequest, id, createdAt };
    this.prayerRequests.set(id, prayerRequest);
    return prayerRequest;
  }

  async getPrayerRequests(): Promise<PrayerRequest[]> {
    return Array.from(this.prayerRequests.values());
  }

  async createContactMessage(insertContactMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const createdAt = new Date();
    const contactMessage: ContactMessage = { ...insertContactMessage, id, createdAt };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
}

export const storage = new MemStorage();
