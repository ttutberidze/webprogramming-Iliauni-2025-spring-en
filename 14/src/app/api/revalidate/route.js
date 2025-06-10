import { revalidatePath, revalidateTag } from "next/cache"

export async function GET() {
    revalidateTag('users')
    return Response.json({ message: 'Cache was cleared' })
  }