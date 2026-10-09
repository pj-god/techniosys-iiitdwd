import { getSheetRecords } from "@/lib/googleSheet";
import {redis} from '@/lib/redis';

const CACHE_KEY = "megarush:test:day1";
const CACHE_TTL = 30; //seconds will change it to manual trigger

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

    await redis.set(CACHE_KEY, { bgmi: bgmiData, freeFire: freeFireData }, {
      ex: CACHE_TTL
    });

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