var list = []
const LaLista = (student) => {
    if(list.indexOf(student)){
        console.log(list)
        return list
    }else {
        list.push(student)
    }
}

export default LaLista