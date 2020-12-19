import { LOCAL_STRING, LOCAL_STRING_TYPES } from './consts';
interface timeRangeTransformConfig {
    localString: LOCAL_STRING_TYPES
};

export function timeRangeTransform(second: number, config: timeRangeTransformConfig = { localString: LOCAL_STRING }): string {

    const { localString } = config;
    let res: string = '';
    let surplus = second;
    while (surplus > 0) {
        if (surplus < 60) {
            res += `${surplus}${localString.second}`;
            break;
        }
        if (surplus < 3600) {
            res += `${Math.floor(surplus / 60)}${localString.minute}`;
            surplus = surplus % 60;
            continue;
        }
        if (surplus < 86400) {
            res += `${Math.floor(surplus / 3600)}${LOCAL_STRING.hour}`;
            surplus = surplus % 3600;
            continue;
        }
        if (surplus < 2592000) {
            res += `${Math.floor(surplus / 86400)}${LOCAL_STRING.day}`;
            surplus = surplus % 86400;
            continue;
        }
        if (surplus < 31536000) {
            res += `${Math.floor(surplus / 2592000)}${LOCAL_STRING.month}`;
            surplus = surplus % 2592000;
            continue;
        }
        res += `${Math.floor(surplus / 31536000)}${LOCAL_STRING.year}`;
        surplus = surplus % 31536000;
    }
    return res;
}

export default timeRangeTransform