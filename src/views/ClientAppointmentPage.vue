<template>
    <div class="calendar-container">
        <h1 id="header">Make an appointment to visit our residents here!</h1>
        <div class="year">
            <div>
                <span class="fl" @click="lastYear">«</span>
                <span class="fl" @click="lastMonth">‹</span>
                <p><b>{{formatMonth(nowDate.month)}} {{nowDate.year}}</b></p>
                <span class="fr" @click="nextYear">»</span>
                <span class="fr" @click="nextMonth">›</span>
            </div>
        </div>
        <ul class="week">
           <li v-for="(o,index) in 7" :key="o">{{formatWeek(index)}}</li> 
        </ul>
        <ul class="date">
            <li class="none-week" v-for="o in lastMonthDays" :key="o+50" >{{lastMonthStartDay+o-1}}</li>
            <li @click="clickEvent" v-for="day in nowMonthDays" :key="day" class="middle-week">{{day}}</li>
            <li class="none-week" v-for="day in (42-lastMonthDays-nowMonthDays)" :key="day+100">{{day}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['start-date'],
    data () {
        return {
            selectDate: [],
            nowDate: this.getDate(new Date()),
        }
    },
    computed: {
        lastMonthDays () {
            return this.startWeek()
        },
        lastMonthStartDay () {
            return this.calcLastMonthDays(this.nowDate.year,this.nowDate.month)-(this.startWeek()-1)
        },
        nowMonthDays () {
            return this.calcDays(this.nowDate.year,this.nowDate.month)
        }
    },
    created () {
        if(this.setDate) {
            this.nowDate = this.getDate(this.setDate)
        }
    },
    methods: {
        getDate (date) {
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDay(),
                date: date.getDate()
            }
        },
        formatWeek (day) {
            switch (day) {                
                case 0:
                    return 'Sunday';
                case 1:
                    return 'Monday'
                case 2:
                    return 'Tuesday';
                case 3:
                    return 'Wednesday'
                case 4:
                    return 'Thursday'
                case 5:
                    return 'Friday'
                case 6:
                    return 'Saturday'
            }
        },
        formatMonth (month) {
            switch (month) {                
                case 0:
                    return 'January';
                case 1:
                    return 'February'
                case 2:
                    return 'March';
                case 3:
                    return 'April'
                case 4:
                    return 'May'
                case 5:
                    return 'June'
                case 6:
                    return 'July'
                case 7:
                    return 'August'
                case 8:
                    return 'September'
                case 9:
                    return 'October'
                case 10:
                    return 'November'
                case 11:
                    return 'December'
            }
        },
        isLeapYear (year) {
             return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
        },
        calcWeekend (year,month,day) {
            return new Date(year,month,day).getDay();
        },
        calcDays (year,month) {
            const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if(this.isLeapYear(year)&&month===1)
                return 29
            else 
                return monthDay[month]
        },
        calcLastMonthDays (year,month) {
            if(month===0) {
                return this.calcDays(year-1,11)
            }else {
                return this.calcDays(year,month-1)
            }
        },
        lastMonth () {
            if(this.nowDate.month===0) {
                this.nowDate.month = 11
                this.nowDate.year --
            }else {
                this.nowDate.month --
            }
        },
        nextMonth () {
            if(this.nowDate.month===11) {
                this.nowDate.month = 0
                this.nowDate.year ++
            }else {
                this.nowDate.month ++
            }
        },
        lastYear () {
            this.nowDate.year --
        },
        nextYear () {
            this.nowDate.year ++
        },
        startWeek () {
            return this.calcWeekend(this.nowDate.year,this.nowDate.month,1)
        },
        clickEvent (e) {
            let monthNo = this.nowDate.month;
            let month = monthNo<=11?(monthNo+1):0
            let date = {
                year:this.nowDate.year,
                month:month,
                week: new Date(this.nowDate.year,this.nowDate.month,e.target.innerText).getDay(),
                day:Number(e.target.innerText)
            }
            this.$emit('click-event',date);
        } 
    }

}
</script>


<style>
    .calendar-container {
        padding: 2vw 3vw;
        height: 600px;
        width: 100%;
    }
    .year {
        text-align: center;
        margin-bottom: 10px;
        height: 50px;
        font-size: 20px;
    }
    .week,.date{
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    .week {
        border-bottom: .5px solid #ddd;
        margin-bottom: 5px;
    }
    ul>li {
        font-size: 14px;
        width: 14%;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    .none-week {
        color: #aaa;
    }
    .none-week, .middle-week{
        height: 70px;
    }
    .year>div {
        height: 60px;
        overflow: hidden;
    }
    .year span {
        line-height: 30px;
        font-size: 30px;
        display:  inline-block;
        width: 10%;
    }
    .year p {
        line-height: 10px;
        width: 50%;
        display: inline-block;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .calendar-container{
        background-color: white;
    }
    #header{
        text-align: center;
    }
</style>
