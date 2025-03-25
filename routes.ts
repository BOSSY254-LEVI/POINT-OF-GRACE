import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPrayerRequestSchema, insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for prayer requests
  app.post("/api/prayer-requests", async (req, res) => {
    try {
      const validatedData = insertPrayerRequestSchema.parse(req.body);
      const newPrayerRequest = await storage.createPrayerRequest(validatedData);
      res.status(201).json({
        message: "Prayer request submitted successfully",
        prayerRequest: newPrayerRequest
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  app.get("/api/prayer-requests", async (req, res) => {
    try {
      const prayerRequests = await storage.getPrayerRequests();
      // Filter out private prayer requests for public viewing
      const publicPrayerRequests = prayerRequests.filter(req => !req.isPrivate);
      res.status(200).json(publicPrayerRequests);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve prayer requests" });
    }
  });

  // API routes for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const newContactMessage = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Message sent successfully",
        contactMessage: newContactMessage
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
