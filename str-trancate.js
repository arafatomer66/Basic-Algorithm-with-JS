function truncateString(str, num) {
    //clear out that junk in your trunk
    var truncat = "";
    if (str.length > num) {
        truncat = str.slice(0, num) + "...";
        return truncat;
    }
    return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);