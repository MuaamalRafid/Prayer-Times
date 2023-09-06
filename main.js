import "regenerator-runtime/runtime";
import axios from "axios";

function getPrayerTimesByCity(city) {
  axios
    .get(`http://api.aladhan.com/v1/timingsByCity?city=${city}&country=iraq`)
    .then(function (response) {
      console.log(response.data.data.timings);
      document.getElementById("fajr").innerHTML =
        response.data.data.timings.Fajr;
      document.getElementById("sunrise").innerHTML =
        response.data.data.timings.Sunrise;
      document.getElementById("dhuhr").innerHTML =
        response.data.data.timings.Dhuhr;
      document.getElementById("asr").innerHTML = response.data.data.timings.Asr;
      document.getElementById("maghrib").innerHTML =
        response.data.data.timings.Maghrib;
      document.getElementById("isha").innerHTML =
        response.data.data.timings.Isha;
        document.getElementById("date").innerHTML = response.data.data.date.gregorian.date;
    });
}

function selectCity() {
  //    <option value="AN">الانبار</option>
  //             <option value="MU">المثنى</option>
  //             <option value="QA">القادسية</option>
  //             <option value="BB">بابل</option>
  //             <option value="BG">بغداد</option>
  //             <option value="BA">البصرة</option>
  //             <option value="DQ">ذي قار</option>
  //             <option value="DI">ديالى</option>
  //             <option value="DA">دهوك</option>
  //             <option value="AR">اربيل</option>
  //             <option value="KA">كربلاء</option>
  //             <option value="KI">كركوك</option>
  //             <option value="MA">ميسان</option>
  //             <option value="NA">النجف</option>
  //             <option value="NI">نينوى</option>
  //             <option value="SD">صلاح الدين</option>
  //             <option value="SU">سليمانية</option>
  //             <option value="WA">واسط</option>
  let cities = [
    { name: "بغداد", code: "BG" },
    { name: "البصرة", code: "BA" },
    { name: "الانبار", code: "AN" },
    { name: "بابل", code: "BB" },
    { name: "المثنى", code: "MU" },
    { name: "القادسية", code: "QA" },
    { name: "ذي قار", code: "DQ" },
    { name: "ديالى", code: "DI" },
    { name: "دهوك", code: "DA" },
    { name: "اربيل", code: "AR" },
    { name: "كربلاء", code: "KA" },
    { name: "كركوك", code: "KI" },
    { name: "ميسان", code: "MA" },
    { name: "النجف", code: "NA" },
    { name: "نينوى", code: "NI" },
    { name: "صلاح الدين", code: "SD" },
    { name: "سليمانية", code: "SU" },
    { name: "واسط", code: "WA" },
  ];

    for (let city of cities) {
        const content = `
<option value ="${city.code}">${city.name}</option>
        `;
        document.getElementById("city").innerHTML += content;
    };
    
  document.getElementById("city").addEventListener("change", function (e) {
    getPrayerTimesByCity(e.target.value);
      let cityName = "";
      for  (let city of cities) {
          if (city.code === e.target.value) {
              cityName = city.name;
          }
      }
      document.getElementById("city-name").innerHTML = cityName;
  });
}

selectCity();

