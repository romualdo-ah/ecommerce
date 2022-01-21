import { productInterface } from './../interfaces/index';
import useSWR from 'swr';
const fetcher = async (url: string) => await fetch(url).then((r) => r.json());
export const useProducts = <Data=productInterface|productInterface[]>(url:string) => {
        
    const revalidationOptions = {
          revalidateOnFocus: true,
          revalidateOnReconnect: true,
        };

    const { data, error } = useSWR(url, fetcher,revalidationOptions);
    return { data, error };
}
