import axios from 'axios';
import { Charity, CharityDetail, NonprofitTag } from "../types/charity";
const apiUrl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

interface CharitiesResponse {
    nonprofits: Charity[];
}

interface CharityDetailResponse {
    data: {
        nonprofit:     CharityDetail;
        nonprofitTags: NonprofitTag[];
    }
}

export const getCharities = async (cause: string) => {
    const url = `${apiUrl}/search/${cause}?apiKey=${apiKey}`;

    try {
        const res = await axios.get<CharitiesResponse>(url);
        return res.data;
    } catch (error) {
        console.error(error);
        return;
    }
}

export const getCharity = async (id: string) => {
    const url = `${apiUrl}/nonprofit/${id}?apiKey=${apiKey}`;

    try {
        const res = await axios.get<CharityDetailResponse>(url);
        return res.data;
    } catch (error) {
        console.error(error);
        return;
    }
}