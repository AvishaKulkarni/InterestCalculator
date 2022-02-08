export default function TimeCalculation() {
  let totalMonth, totalDays;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);

  console.log(startDate, endDate);
  let date1 = {
    date: startDate.getDate(),
    month: startDate.getMonth() + 1,
    year: startDate.getFullYear(),
  };

  let date2 = {
    date: endDate.getDate(),
    month: endDate.getMonth() + 1,
    year: endDate.getFullYear(),
  };

  let totalYear = date2.year - date1.year;

  if (date2.month >= date1.month) {
    totalMonth = date2.month - date1.month;
  } else {
    totalYear--;
    totalMonth = 12 + date2.month - date1.month;
  }

  if (date2.date >= date1.date) {
    totalDays = date2.date - date1.date;
  } else {
    totalMonth--;
    totalDays = 30 + date2.date - date1.date;
    if (date2.month < 0) {
      date1.month = 11;
      totalYear--;
    }
  }
  let totalDays = totalYear * 360 + totalMonth * 30 + totalDays;
  return (
    <div className="App">
      <input type="date" id="start-date" />
      <input type="date" id="end-date" />
    </div>
  );
}
