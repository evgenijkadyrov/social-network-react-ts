
export const updateObjectInArray=(items:Array<any>, itemsId:number,objPropName:string,newObjProps:Object)=>{
   return items.map(el => el[objPropName] === itemsId ? {
        ...el,
        ...newObjProps
    } : el)
}