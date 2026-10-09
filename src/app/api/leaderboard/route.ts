import { getSheetRecords } from "@/lib/googleSheet";
import {redis} from '@/lib/redis';
import { CACHE_KEY } from "@/components/utils/constants";

export async function GET() {
  try{

    const cachedData = await redis.get(CACHE_KEY);

    if(cachedData){
      return Response.json({
        success: true,
        source: 'redis',
        data: cachedData
      })
    }

    const bgmiData = await getSheetRecords("BGMI");
    const freeFireData = await getSheetRecords("FreeFire");

    await redis.set(CACHE_KEY, { bgmi: bgmiData, freeFire: freeFireData });

    return Response.json({
      success: true, 
      source: "sheets",
      data: { bgmi: bgmiData, freeFire: freeFireData }
    })
    
  }catch(err){
    console.error(err);
    return Response.json({
      success: false,
      error: "Failed to fetch"
    }, {status: 500});
  }
}