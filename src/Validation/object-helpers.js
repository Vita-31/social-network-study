export const updateObjectsArray = (items, itemsId, objPropName, newPropObj) => {
    return items.map(u => {
        if (u[objPropName] === itemsId) {
            return {...u, ...newPropObj}
        }
        return u
    })
}