import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import api from "./api";

export const useFetchPage = (pageID)=>{
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        api.getPage(pageID).then((data)=>{
            dispatch({
                type: "GET_PAGE",
                page: data
            });
        }).finally(()=>{
            setLoading(false);
        })
    })

    return [
        loading
    ]
}
