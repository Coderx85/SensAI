"use server";

import { db } from "@/lib/db"
import { resumeSchema } from "@/lib/schema";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

interface resumeProps {
    resume: string;
}

export async function saveResume({ resume }: resumeProps) {
  try {
    const { userId } = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { id: userId } });
    if(!user) throw new Error("User not found");

    const resumeData = await db.resume.upsert({
			where: { userId },
			update: { resume },
			create: { userId, resume },
			});

			revalidatePath('/resume')
			return resumeData;
  } catch (error :any) {
    throw new Error(error.message);
  }
}

export async function getResume() {
  try {
    const { userId } = await auth();
    if(!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({ where: { id: userId } });
    if(!user) throw new Error("User not found");

    return await db.resume.findUnique({ where: { userId } });
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function improveWithAI(resume: string) {
  try {
    
  } catch (error: any) {
    throw new Error(error.message);
  }
}