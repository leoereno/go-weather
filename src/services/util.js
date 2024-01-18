
export function getEmoji(code){
    if(code === 0) return "☀";
    if(code <= 3 && code > 0) return "🌤";
    if(code >= 80) return "🌩";
    if(code >= 61 && code <= 65) return "🌧";
    else return String(code);
}