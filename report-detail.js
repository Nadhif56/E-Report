const reportId = Number(new URLSearchParams(window.location.search).get("id"));
const report = reportsData.find((item) => item.id === reportId) || reportsData[0];

document.title = `${report.title} | E-Report`;
document.getElementById("report-title").textContent = report.title;
document.getElementById("report-author").textContent = report.isAnonymous ? "Anonim" : report.author;
document.getElementById("report-time").textContent = report.time;
document.getElementById("report-image").src = report.image;
document.getElementById("report-image").alt = `Gambar ${report.title}`;
document.getElementById("report-content-1").textContent = report.content[0];
document.getElementById("report-quote").textContent = `"${report.quote}"`;
document.getElementById("report-content-2").textContent = report.content[1];
document.getElementById("report-category").textContent = report.category;

const recentReports = reportsData
  .filter((item) => item.id !== report.id)
  .slice(0, 3);
document.getElementById("recent-reports").innerHTML = recentReports
  .map(
    (item) => `
      <li class="list-group-item">
        <a class="text-decoration-none" href="./selengkapnya.html?id=${item.id}">
          <i class="fa-solid fa-chevron-right text-primary me-2"></i>${item.title}
        </a>
      </li>`
  )
  .join("");

AOS.init();
