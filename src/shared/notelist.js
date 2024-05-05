import currentTime from "./currentTime";
const initialNotes = [
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
        timestamp: currentTime()
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
        timestamp: currentTime()
    },
    {
      key: 3,
      title: "Arrays",
      content:
        "Q. Why did the programmer quit his job? A. Because he didn't get arrays.",
        timestamp: currentTime()
    },
    {
      key: 4,
      title: "Hardware vs. Software",
      content:
        "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
        timestamp: currentTime()
    }
  ];
  export default initialNotes;