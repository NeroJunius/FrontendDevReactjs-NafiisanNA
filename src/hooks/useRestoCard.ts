import { API }from "@/libs/api";
import { useEffect, useState } from "react";
import {IRestoCard} from "@/interfaces/restaurants";

export function useFetchResto() {
    const [RestoCard, setRestoCard] = useState<IRestoCard[]>([]);

    async function getRestoCard() {
        try {
            const Response = await API.get('/');
            console.log(Response.data);
            setRestoCard(Response.data);
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    useEffect(() => {
        getRestoCard();  
        
    }, [])
    
    return RestoCard
           
}