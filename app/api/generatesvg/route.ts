
import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';
 
// Create a new HuggingFace Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request, res: any) {
  // Extract the `messages` from the body of the request
  try {
    const { messages } = await req.json();

    const response = await Hf.textToImage({
      inputs: `create a line drawing of ${messages}`,
      model: 'dataautogpt3/OpenDalleV1.1',
    });
    if (response instanceof Blob) {
      const buffer = await Buffer.from(await response.arrayBuffer())
      const mimeType = response.type;
      const base64data = buffer.toString('base64')
      const img = `data:${mimeType};base64,` + base64data;
         
      return NextResponse.json(img);
    } else {
      return new NextResponse("Something went wrong", { status: 500 });
    }
  } catch (error) {
    console.log("[IMAGE_ERR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}