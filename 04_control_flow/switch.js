// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const input = "mar";
const month = input.toLowerCase()

const WinWeather = "Winter"
const SumWeather = "Summer"
switch (month) {
    case "jan":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "feb":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "mar":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "apr":
        console.log(`${month.toLocaleUpperCase()} is a ${SumWeather} month`)
        break;
    case "may":
        console.log(`${month.toLocaleUpperCase()} is a ${SumWeather} month`)
        break;
    case "june":
        console.log(`${month.toLocaleUpperCase()} is a ${SumWeather} month`)
        break;
    case "july":
        console.log(`${month.toLocaleUpperCase()} is a ${SumWeather} month`)
        break;
    case "aug":
        console.log(`${month.toLocaleUpperCase()} is a ${SumWeather} month`)
        break;
    case "sept":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "oct":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "nov":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;
    case "dec":
        console.log(`${month.toLocaleUpperCase()} is a ${WinWeather} month`)
        break;

    default:
        console.log(`${month.toLocaleUpperCase()} is not a month`);
        
        break;
}