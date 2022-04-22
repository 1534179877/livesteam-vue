import {request} from "@/networks/index";

const Besturl = '/kanban'

export function getkanban(userName){
    return request({
        method: 'post',
        url:`${Besturl}/findKanbansByUser`,
        data:{
            userName
        }
    })
}
export function deletekanban(name,userName){
    return request({
        method: 'post',
        url:`${Besturl}/deleteKanban`,
        data:{
            userName,
            name
        }
    })
}


export function addkanban(name,userName){
    return request({
        method: 'post',
        url:`${Besturl}/addKanban`,
        data:{
            userName,
            name
        }
    })
}

export function kanbanDetail(data){
    return request({
        method: 'post',
        url:`${Besturl}/findKanbanInfo`,
        data: {
            userName:data.userName,
            name: data.kanbanName
        }
    })
}
