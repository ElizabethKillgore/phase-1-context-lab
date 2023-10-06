/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

function createEmployeeRecord(employeeArray) {
    
    const employeeRecord = {
        firstName:employeeArray[0],
        familyName:employeeArray[1],
        title:employeeArray[2],
        payPerHour:employeeArray[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    
return employeeRecord
}


function createEmployeeRecords(employeeRecords) {
    return employeeRecords.map(employeeRecord => {
        return createEmployeeRecord(employeeRecord)
    })
}

function createTimeInEvent(timeIn) {
    let dateStamp = timeIn.split(" ")
    let timeInEvent = {
        type:"TimeIn",
        date:dateStamp[0], 
        hour:parseInt(dateStamp[1])  
    }
    this.timeInEvents.push(timeInEvent)
    return this
}

function createTimeOutEvent(timeOut) {
    
    let dateStamp = timeOut.split(" ") 
    let timeOutEvent = {
        type:"TimeOut",
        date:dateStamp[0],
        hour:parseInt(dateStamp[1])
    }   
this.timeOutEvents.push(timeOutEvent)
return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeInObject = this.timeInEvents.find(timeInEvent => timeInEvent.date === dateStamp)
    let timeOutObject = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === dateStamp)
    let hoursWorked = (timeOutObject.hour - timeInObject.hour)/100

return hoursWorked
}

function wagesEarnedOnDate(dateStamp) {
    let wagesEarned = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return wagesEarned   
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (employeeRecord) {
        return employeeRecord.date
    })

    const payable = eligibleDates.reduce(function (memo, dateStamp) {
        return memo + wagesEarnedOnDate.call(this, dateStamp)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
 
function findEmployeeByFirstName(employeeRecordsArray, firstNameString) {
    console.log(employeeRecordsArray)
    return employeeRecordsArray.find(employeeRecordObject => employeeRecordObject.firstName === firstNameString)
}

function calculatePayroll(allEmployeeRecords) {
    
    let payroll = allEmployeeRecords.reduce((accumulator, employeeObject) => {
        return accumulator + allWagesFor.call(employeeObject)
    }, 0)
    return payroll
}