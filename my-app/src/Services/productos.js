import instance from "../Config/axios"
export function getAllProductosMLA(buscar){
    return instance.get(`sites/MLA/search?q=${buscar}`)
}
export function getByIdProductosMLA(id){
    return instance.get(`items/${id}`)
}
export function createProductos(){
    
}
