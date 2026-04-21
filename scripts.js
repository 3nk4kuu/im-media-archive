/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

let currentData = [];
let selectedItem = null;

// convert seconds to minutes:seconds
function formatTime(totalSeconds) {
  if (!totalSeconds) return "---";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// placeholder for details
  function resetDetailsPanel() {
    const panel = document.getElementById("details-panel");
    if (panel) {
      panel.innerHTML = `<div class="placeholder-text">Select a song to view details.</div>`;
    }
  }

// get song details & display them in the side panel
function songDetails(song) {
  const panel = document.getElementById("details-panel");
  const gameKeys = Object.keys(song.versions);

  // game badges
  const gameBadges = gameKeys.map(k => {
      const label = TAGS[k]?.label || k;
      return `<span class="diff-badge game-badge ${k}">${label}</span>`;
    }).join("");
  const gameNames = `<div class="diff-badges-row">${gameBadges}</div>`;

  // category badges
  const allCategories = [];
  gameKeys.forEach(k => {
    const v = song.versions[k];
    const groups = v.tags.filter(t => TAGS[t] && TAGS[t].type === "group").map(t => {
        return `<span class="diff-badge ${t}">${TAGS[t].label}</span>`;
      });
    allCategories.push(...groups);
  });

  const uniqueGroups = [...new Set(allCategories)];
  const groupText = uniqueGroups.length > 0 ? `<div class="diff-badges-row">${uniqueGroups.join("")}</div>` : "---";

  // difficulty badges
  const diffBadges = gameKeys.map(k => {
      const v = song.versions[k];
      const badges = Object.keys(v.difficulties).map(diff => {
          const level = v.difficulties[diff].level;
          return `<span class="diff-badge ${k} ${diff}">${diff.toUpperCase()} ${level}</span>`;
        }).join("");
      return `<div class="diff-badges-row">${badges}</div>`;
    }).join("");



  // song details & image
  const lengthStr = formatTime(song.length);
  const favIcon = song.favorite ? "♥" : "♡";
  const favClass = song.favorite ? "fav-btn active" : "fav-btn";
  const coverHTML = song.cover ? `<img src="${song.cover}" class="details-cover" alt="Cover" />` : `<div class="details-cover"></div>`;
  const safeTitle = song.title.replace(/'/g, "\\'");
  panel.innerHTML = `
    <div class="details-header">
      ${coverHTML}
      <div class="details-title-box">
        <button class="${favClass}" onclick="toggleFavorite('${safeTitle}')">${favIcon}</button>
        <h2>${song.title}</h2>
        <h3>${song.artist}</h3>
      </div>
    </div>

    <table class="details-table">
      <tr><td>BPM</td><td>${song.bpm || '---'}</td></tr>
      <tr><td>Length</td><td>${lengthStr}</td></tr>
      <tr><td>Game</td><td>${gameNames}</td></tr>
      <tr><td>Category</td><td>${groupText}</td></tr>
    </table>

    <div class="diff-section-title">Difficulties</div>
    <div class="diff-badges-container">
      ${diffBadges}
    </div>
  `;
}

// songs grid
function songsGrid(items) {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";

  items.forEach((song) => {
    const square = document.createElement("div");
    square.className = "cover-square";

    // song selected
    if (selectedItem && selectedItem.title === song.title) {
      square.classList.add("active");
    }
    if (song.cover) {
      square.style.backgroundImage = `url('${song.cover}')`;
    }
    square.onclick = () => {
      selectedItem = song;
      songDetails(song);
      document.querySelectorAll('.cover-square').forEach(el => el.classList.remove('active'));
      square.classList.add("active");
    };

    container.appendChild(square);
  });
}

// toggle 'favorite' song
function toggleFavorite(songTitle) {
  const song = songs.find(s => s.title === songTitle);
  if (song) {
    song.favorite = !song.favorite;
    if (selectedItem && selectedItem.title === songTitle) {
      songDetails(selectedItem);
    }
  }
}

// search
function handleSearch() {
  const searchInput = document.getElementById("search-bar");
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (!searchTerm) {
    currentData = songs;
    selectedItem = null;
    resetDetailsPanel();
    songsGrid(currentData);
    return;
  }

  currentData = songs.filter(song => {
    const matchesTitle = song.title.toLowerCase().includes(searchTerm);
    const matchesArtist = song.artist.toLowerCase().includes(searchTerm);

    const matchesTags = Object.keys(song.versions || {}).some(gameKey => {
      const gameNameMatch = TAGS[gameKey]?.label?.toLowerCase().includes(searchTerm);

      const specificTagsMatch = (song.versions[gameKey].tags || []).some(tag => {
          let tagLabel = TAGS[tag]?.label?.toLowerCase() || "";
          tagLabel = tagLabel.replace("chapter", "").trim();
          if (!tagLabel) return false;
          return tagLabel.includes(searchTerm);
      });

      return gameNameMatch || specificTagsMatch;
    });

    return matchesTitle || matchesArtist || matchesTags;
  });

  selectedItem = null;
  resetDetailsPanel();

  // for no result
  const container = document.getElementById("grid-container");
  if (currentData.length === 0) {
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100%";
    container.innerHTML = `
      <div class="placeholder-text">
        No results found for "${searchTerm}"
      </div>
    `;
  } else {
    // populate grid and/or search has result
    container.style.display = "";
    container.style.justifyContent = "";
    container.style.alignItems = "";
    container.style.height = "";
    songsGrid(currentData);
  }
}

// populate grid
document.addEventListener("DOMContentLoaded", () => {
  if (typeof songs !== 'undefined') {
    currentData = songs;
    songsGrid(currentData);
  } else {
    console.error("Songs node lost. System requires resynchronization.");
  }
  const searchInput = document.getElementById("search-bar");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }
});

// TODO: make filtering popup/tab & functions
// TODO: add clear status?
// TODO: add song randomizer?