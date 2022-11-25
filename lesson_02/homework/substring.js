function subString(string) {
    if (typeof string === 'string' || string instanceof String)
        return string.substring(0,10) + "...";
    else 
        return "Invalid input";
}

console.log(subString("xinchaocacbandenvoiTechmaster"));