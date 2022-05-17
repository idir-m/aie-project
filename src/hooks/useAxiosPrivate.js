import { useEffect } from "react";
import { axiosPrivate } from "../axios/axios";
import useAuth from "./useAuth";


const useAxiosPrivate = () => {
    const { auth } = useAuth();


    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.accesToken}`;
                    console.log('on est la ' +auth?.accesToken);
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
        }

    }, [auth])

    return axiosPrivate;

}


export default useAxiosPrivate;