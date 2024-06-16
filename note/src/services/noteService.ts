import { HTTP } from "../http"
export function getNotes(){
    return HTTP.get("/notes/", {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Token ' + localStorage.getItem('Token'),
        },
    })
}