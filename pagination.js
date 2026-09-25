// pagination.js
// Pagination sederhana (client-side) untuk kartu-kartu laporan di More.html.
//
// Cara kerja:
// - Semua kartu laporan berada di dalam <div id="reportsRow"> dan masing-masing
//   kartu memiliki class "report-card-item".
// - Script ini membagi kartu-kartu tersebut ke beberapa halaman (default 6
//   kartu per halaman), lalu membangun tombol Previous / nomor halaman / Next
//   secara otomatis di dalam <ul id="paginationControls">.
// - Menambah atau mengurangi kartu di More.html tidak perlu mengubah file ini;
//   jumlah halaman akan otomatis menyesuaikan.////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//                                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//////////////////////////////    

(function () {
  const CARDS_PER_PAGE = 3;

  const reportsRow = document.getElementById("reportsRow");
  const paginationList = document.getElementById("paginationControls");

  if (!reportsRow || !paginationList) return;

  const cards = Array.from(reportsRow.querySelectorAll(":scope > .report-card-item"));
  const totalCards = cards.length;
  const totalPages = Math.max(1, Math.ceil(totalCards / CARDS_PER_PAGE));

  let currentPage = 1;

  function showPage(page) {
    currentPage = Math.min(Math.max(page, 1), totalPages);

    const start = (currentPage - 1) * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "" : "none";
    });

    renderControls();
  }

  function pageItem(label, targetPage, { disabled = false, active = false, ariaLabel = null } = {}) {
    const li = document.createElement("li");
    li.className = "page-item" + (disabled ? " disabled" : "") + (active ? " active" : "");

    const a = document.createElement("a");
    a.className = "page-link";
    a.href = "#Recent";
    a.textContent = label;
    if (ariaLabel) a.setAttribute("aria-label", ariaLabel);
    if (active) a.setAttribute("aria-current", "page");
    if (disabled) {
      a.setAttribute("tabindex", "-1");
      a.setAttribute("aria-disabled", "true");
    } else {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        showPage(targetPage);
      });
    }

    li.appendChild(a);
    return li;
  }

  function renderControls() {
    paginationList.innerHTML = "";

    paginationList.appendChild(
      pageItem("Previous", currentPage - 1, {
        disabled: currentPage === 1,
        ariaLabel: "Halaman sebelumnya",
      })
    );

    for (let page = 1; page <= totalPages; page++) {
      paginationList.appendChild(
        pageItem(String(page), page, { active: page === currentPage })
      );
    }

    paginationList.appendChild(
      pageItem("Next", currentPage + 1, {
        disabled: currentPage === totalPages,
        ariaLabel: "Halaman berikutnya",
      })
    );
  }

  showPage(1);
})();