let id: number = parseInt(window.localStorage.getItem("currentId") || "0") || 0;
function createId(){
    id++
    window.localStorage.setItem("currentId",id.toString())
    return id
}

export default createId