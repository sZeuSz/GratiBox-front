import dayjs from "dayjs";
import add from "date-fns/add";

function nextThreeDates(date, day, type) {
    let dates = [];
    if (type[0] === 'W') {
        dates = getDates(3, day, new Date(dayjs(date).format('MM/DD/YYYY')))
        return (
                <>
                {dates.map((d, index) => <><p key={index}>{d}</p></>)}
                </>
        )
    }
    return (
        <>
            <><p>
                    {dayjs(add(new Date(dayjs(date).format('DD/MM/YYYY').split('/')[2], dayjs(date).format('DD/MM/YYYY').split('/')[1], day.split(' ')[1]), {
                        months: 0,
                    })).format('DD/MM/YYYY')}
                </p><p>
                        {dayjs(add(new Date(dayjs(date).format('DD/MM/YYYY').split('/')[2], dayjs(date).format('DD/MM/YYYY').split('/')[1], day.split(' ')[1]), {
                            months: 1,
                        })).format('DD/MM/YYYY')}
                    </p><p>
                        {dayjs(add(new Date(dayjs(date).format('DD/MM/YYYY').split('/')[2], dayjs(date).format('DD/MM/YYYY').split('/')[1], day.split(' ')[1]), {
                            months: 2,
                        })).format('DD/MM/YYYY')}
                    </p></>
            </>        
        )
}
export {
    nextThreeDates,
}

function addDays(date, day) {
    let new_date = new Date(date.getTime());
    new_date.setDate(new_date.getDate() + day);
    return new_date;
}

function getDates(k, day, date) {
    const day_num = ['sunday', 'monday', 'tuesday', 'wednesday' ,'thursday' ,'friday', 'saturday'].indexOf(day.toLowerCase()) // converting day name to number

    let new_day = new Date();
    while (new_day.getDay() !== day_num) {
        new_day = addDays(new_day, 1)
    }
    
    return Array(k).fill().map((_, index) => addDays(new_day, index * 7).toLocaleDateString() )
}