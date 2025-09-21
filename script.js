const horoscopes = {
    Aries: "Today you're full of energy. Use it wisely to conquer your fears.",
    Taurus: "Patience brings rewards. Let your steady nature shine.",
    Gemini: "Curiosity will lead you to something new. Embrace change.",
    Cancer: "You may feel emotional. Take time for self-care and reflection.",
    Leo: "Let your confidence light up the room. Someone is watching.",
    Virgo: "Your attention to detail will save the day. Trust your process.",
    Libra: "Balance is key. Say no to things that throw you off center.",
    Scorpio: "Intensity is your power. Use it to make bold moves today.",
    Sagittarius: "Adventure awaits! Take the first step without fear.",
    Capricorn: "Your hard work is paying off. Stay focused on the goal.",
    Aquarius: "Think outside the box. Innovation is your best tool.",
    Pisces: "Your creativity will inspire someone close. Share your vision."
  }
  
  const zodiacRanges = [
    { sign: "Capricorn", start: 1222, end: 119 },
    { sign: "Aquarius", start: 120, end: 218 },
    { sign: "Pisces", start: 219, end: 320 },
    { sign: "Aries", start: 321, end: 419 },
    { sign: "Taurus", start: 420, end: 520 },
    { sign: "Gemini", start: 521, end: 620 },
    { sign: "Cancer", start: 621, end: 722 },
    { sign: "Leo", start: 723, end: 822 },
    { sign: "Virgo", start: 823, end: 922 },
    { sign: "Libra", start: 923, end: 1022 },
    { sign: "Scorpio", start: 1023, end: 1121 },
    { sign: "Sagittarius", start: 1122, end: 1221 }
  ]

  function getZodiacSign(month, day) {
    const mmdd = month * 100 + day;
  
    for (let i = 0; i < zodiacRanges.length; i++) {
      const { sign, start, end } = zodiacRanges[i];
  
      if (start <= end) {
        if (mmdd >= start && mmdd <= end) return sign;
      } else {
        if (mmdd >= start || mmdd <= end) return sign;
      }
    }
  
    return "Unknown";
  }

  function showHoroscope() {
  const birthdateInput = document.getElementById("birthday").value;

  if (!birthdateInput) {
    alert("Please enter your birthdate.");
    return;
  }

  const date = new Date(birthdateInput);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const sign = getZodiacSign(month, day);
  const horoscope = horoscopes[sign] || "No horoscope available.";

  document.getElementById("zodiacsign").textContent = `Your sign: ${sign}`;
  document.getElementById("horoscope").textContent = horoscope;
  document.getElementById("result").style.display = "block";
}

document.getElementById("HoroscopeBtn").addEventListener("click", showHoroscope);