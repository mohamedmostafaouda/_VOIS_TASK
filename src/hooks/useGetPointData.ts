import { useAppSelector } from "@redux/hooks"
import { Data } from "@types";

export const useGetPointData = (country: string, camp:string, school: string):Data|undefined => {
    const data = useAppSelector(state => state.data.data);

    const itemData:Data | undefined = data.find((item:Data)=>{
        return (item.school === school && item.camp === camp && item.country === country)
    })

    return itemData;
}