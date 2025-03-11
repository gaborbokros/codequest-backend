import { connect } from "mongoose";

export default async (MONGO_URI) => {
  try {
    await connect(MONGO_URI);
    console.log("[DATABASE] Database connected");
  } catch (error) {
    console.error(error);
  }
};
