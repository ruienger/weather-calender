
function getSlicedCalenderArr(){
    let date = new Date()
    const nowMonth = date.getMonth()
    const nowYear = date.getFullYear()
    let nowTime = date.getTime()

    // const firstDate = new Date(nowYear, nowMonth, 1)
    // let startDay
    // if(nowDay == 0){
    //     startDay = date.getTime() - 6*60*60*24*1000
    // }else{
    //     startDay = date.getTime() - ( nowDay - 1 )*60*60*24*1000 
    // }

    const calenderArr = []

    for(let i=0; i<7; i++){
        calenderArr.push({time:new Date(nowTime), date:new Date(nowTime).getDate()})
        nowTime += 60*60*24*1000
        
    }
    return calenderArr
}

export default getSlicedCalenderArr
