import {isNull} from "./ObjectsUtils.js";

export const DEFAULT_FORMAT = 'yyyy-MM-dd HH:mm:ss'


export const formatDate=(date, format=DEFAULT_FORMAT)=> {
    if (isNull(date)) {
        return date
    }else {
        const map = {
            "yyyy": date.getFullYear(),
            "MM": String(date.getMonth() + 1).padStart(2, '0'),
            "dd": String(date.getDate()).padStart(2, '0'),
            "HH": String(date.getHours()).padStart(2, '0'),
            "mm": String(date.getMinutes()).padStart(2, '0'),
            "ss": String(date.getSeconds()).padStart(2, '0')
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, match => map[match]);
    }
}
