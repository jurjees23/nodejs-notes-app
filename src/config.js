import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = `mongodb+srv://jurjees23:${process.env.MONGO_PASSWORD}@cluster0.ma4cm.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`;

