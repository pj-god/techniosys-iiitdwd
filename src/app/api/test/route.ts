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

    const data = await getSheetRecords("Day1");

    await redis.set(CACHE_KEY, data, {
      ex: CACHE_TTL
    });

    return Response.json({
      success: true, 
      source: "sheets",
      data
    })
    
  }catch(err){
    console.error(err);
    return Response.json({
      success: false,
      error: "Failed to fetch"
    }, {status: 500});
  }
}