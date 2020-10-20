function getColor(weather){
    let color = '#61e1f2'
    if(new Date().getHours()>19){
        color = '#2a2a2a'
    }else{
        color = changeColor(weather)
    }
    return color
}
function changeColor(weather){
    switch(weather){
        case '晴':
            return '#61e1f2'
        case '阴':
            return '#a1a1a2'
        case '雪':
            return '#f1f1f2'
        case '雨':
            return '#61e1f2'
    }
}

export default getColor