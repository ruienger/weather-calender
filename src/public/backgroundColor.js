function getColor(weather){
    let color = '#28abb9'
    if(new Date().getHours()>19){
        color = '#214252'
    }else{
        color = changeColor(weather)
    }
    return color
}
function changeColor(weather){
    switch(true){
        case weather.includes('晴'):
            return '#28abb9'
        case weather.includes('云'):
            return '#99a8b2'
        case weather.includes('阴'):
            return '#557571'
        case weather.includes('雪'):
            return '#ebebeb'
        case weather.includes('雨'):
            return '#1f6f8b'
        case weather.includes('霾'):
            return '#d6d2c4'
        case weather.includes('沙'):
            return '#f1e189'
        case weather.includes('冰'):
            return '#1f3c88'
        default:
            return '#28abb9'
    }
}

export default getColor