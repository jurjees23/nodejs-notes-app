import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 80;
export const MONGODB_URI = `mongodb+srv://rahulvikhe:${process.env.MONGO_PASSWORD}@dev-cluster.idtyynl.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`;