import "server-only";
import {redis} from "@/lib/redis";
import { CACHE_KEY } from "@/components/utils/constants";
import { getSheetRecords } from "@/lib/googleSheet";


export async function GET(){
    try{
        const freeFire = await getSheetRecords("FreeFire");
        const bgmi = await getSheetRecords("BGMI");

        await redis.set(CACHE_KEY, {bgmi, freeFire});

        
        return Response.json({
            success: true
        })
    }catch(err){
        console.error(err);
        return Response.json({
            success: false
        })
    }
}