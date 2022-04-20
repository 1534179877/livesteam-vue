import {request} from "@/networks/index";

export function getkanban(userName){
    return request({
        method: 'post',
        url:`/findKanbansByUser`,
        data:{
            userName
        }
    })
}