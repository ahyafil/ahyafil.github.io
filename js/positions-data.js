/* ============================================================
   Open positions.
   To add a listing: copy an object below and fill it in.
   "date" is shown as posted and used to sort (newest first) —
   use YYYY-MM-DD format.
   "body" can contain multiple paragraphs — separate them with
   a blank line (\n\n).
   Remove a listing entirely once the position is filled/closed.
   ============================================================ */

const POSITIONS = [
  {
    title: "2 postdoc and 1 phD positions on computational mechanisms of human perception (one postdoc position joint with Chris Summerfield)",
    date: "2026-09-14",
    body: `The group of Alex Hyafil at the CRM Barcelona (<a href="https://ahyafil.github.io/">https://ahyafil.github.io/</a>) is looking for two postdoc researchers and a PhD student.  
    
One of the postdoc positions will be co-supervised by Chris Summerfield (Universitat Pompeu Fabra Barcelona / Oxford; <a href="https://humaninformationprocessing.com/">https://humaninformationprocessing.com/</a>). The selected candidate will investigate the computational operations underlying visual scene perception through a combination of simulation of artificial visual systems (conv nets, visual transformers) and human experiments. The position is for two years.

The other postdoc researcher (2-year duration) and the PhD student (4-year) will work jointly on identifying canonical Bayesian operations at play in human visual and auditory perception. The project involves Bayesian modelling, artificial vision network simulations, behavioral and EEG experiments as well as intra-cranial EEG experiments (in collaboration with Benjamin Morillon, AMU Marseille). We will look for complementarity of the two profiles, notably in terms of quantitative and experimental backgrounds.  

The hired researchers will benefit from the stimulating environment of the Barcelona area in cognitive and computational neuroscience. Our groups form part of a larger interacting network of neuroscience labs in Barcelona (http://www.barccsyn.org). Financial support is provided by the Spanish National Agency of Investigation (FPI fellowship for the PhD student).

APPLICATION: Send a curriculum and motivation with a list of two contacts for recommendation letter at <a href="https://bit.ly/ChrisAlexPositions">https://bit.ly/ChrisAlexPositions</a>. Informal enquiries are welcome.

DEADLINE: before October 31 for the PhD position; until position is filled for the postdoc positions.

STARTING DATE: before July 2027 for the PhD position; flexible for the postdoc positions`
  }
];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderPositions() {
  const list = document.getElementById("positions-list");
  const emptyMsg = document.getElementById("positions-empty");
  if (!list) return;

  const sorted = [...POSITIONS].sort((a, b) => (a.date < b.date ? 1 : -1));

  if (sorted.length === 0) {
    if (emptyMsg) emptyMsg.style.display = "block";
    list.innerHTML = "";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";

  list.innerHTML = sorted
    .map((pos) => {
      const paragraphs = pos.body
        .split(/\n\s*\n/)
        .map((p) => `<p>${p.trim()}</p>`)
        .join("");

      return `
        <div class="position-item">
          <p class="position-date">Posted ${formatDate(pos.date)}</p>
          <h2>${pos.title}</h2>
          <div class="position-body">${paragraphs}</div>
        </div>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderPositions);
