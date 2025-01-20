class DateManager{
    constructor (){
        this.dateObject =new Date()
        this.dayNumber=this.dateObject.getDay()
        this.month=this.dateObject.getMonth()
        this.year=this.dateObject.getFullYear()
        this.monthNameHolder=["January","February","March","April","May","June","July","August",
        "September","October","November","December"];
        this.dayNameHolder=["Monday","Tuesday","Wednesday","Thursday","Friday",
        "Saturday","Sunday"]
        }
         get dayName(){
           return this.dayNameHolder[this.dayNumber-1]
            
         }
         get dayNameAb(){
             return this.dayNameHolder[this.dayNumber-1].substring(0,3);
             
         }
         get monthName(){
             return this.monthNameHolder[this.month]
         }
         get monthAb(){
             return this.monthNameHolder[this.month].substring(0,3)
         }
    }

    export default DateManager