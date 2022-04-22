import {request} from "@/networks";

const BestUrl = '/card'

export function addCard(yongdaoId,info){
    return request({
        method: 'post',
        url:`${BestUrl}/insertCard`,
        data:{
            yongdaoId,
            info
        }
    })
}


export function dragCard(kaid,yongdaoId){
    return request({
        method: 'post',
        url:`${BestUrl}/dragCard`,
        data:{
            kaid,
            yongdaoId
        }
    })
}