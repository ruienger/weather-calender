
function getCalenderArr(date){
    
    // let date = new Date(data)
    const nowMonth = date.getMonth()
    const nowYear = date.getFullYear()

    const firstDate = new Date(nowYear, nowMonth, 1)
    const firstDay = firstDate.getDay()
    let startDay
    if(firstDay == 0){
        startDay = firstDate.getTime() - 6*60*60*24*1000
    }else{
        startDay = firstDate.getTime() - ( firstDay - 1 )*60*60*24*1000 
    }

    const calenderArr = []

    for(let i=0; i<6; i++){
        calenderArr.push([])
        for(let j=0; j<7; j++){
            
            calenderArr[i].push({time:new Date(startDay), date:new Date(startDay).getDate()})
            startDay += 60*60*24*1000
        }
    }
    // console.log(calenderArr)
    return calenderArr
}

export default getCalenderArr
