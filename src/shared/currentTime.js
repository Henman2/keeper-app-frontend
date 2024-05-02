const currentTime = ()=>{
    const currentDate = new Date();
    // Define options for formatting the date
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
    const hours = currentDate.getHours();
    const meridiem = hours < 12 ? "AM" : "PM";
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const formattedTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;

    return `${formattedDate} Time: ${formattedTime}`;

}
currentTime();
export default currentTime;