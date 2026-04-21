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

// get random song
function getRandomSong() {
  if (currentData.length === 0) return;

  const randomIndex = Math.floor(Math.random() * currentData.length);
  const randomSong = currentData[randomIndex];

  selectedItem = randomSong;
  songDetails(randomSong);
  
  // prevent whole page from scrolling when random/shuffle button is pressed
  songsGrid(currentData); 
  setTimeout(() => {
    const container = document.getElementById("grid-container");
    const allSquares = document.querySelectorAll('.cover-square');
    const targetSquare = allSquares[randomIndex];

    if (targetSquare && container) {
      const songTop = targetSquare.offsetTop;
      const containerTop = container.offsetTop;      
      container.scrollTo({
        top: songTop - containerTop - 10,
        behavior: 'smooth'
      });
    }
  }, 50);
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
      <button class="${favClass}" onclick="toggleFavorite(${song.id})">${favIcon}</button>
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
    if (selectedItem && selectedItem.id === song.id) {
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
function toggleFavorite(songId) {
  const song = songs.find(s => s.id === songId);
  if (song) {
    song.favorite = !song.favorite;    
    handleSearch();
    
    // keep details open if song is in currentData
    // checks if songs is in visible list using id
    if (currentData.some(s => s.id === songId)) {
      selectedItem = song;
      songDetails(song);
    }
  }
}

// search, filter, and sort
function handleSearch() {
  const searchInput = document.getElementById("search-bar");
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  // get active filters
  const favOnly = document.querySelector('input[name="fav"]')?.checked;
  const selectedGames = Array.from(document.querySelectorAll('input[name="game"]:checked')).map(el => el.value);
  const selectedChars = Array.from(document.querySelectorAll('input[name="character"]:checked')).map(el => el.value);
  const selectedDiffs = Array.from(document.querySelectorAll('input[name="diff"]:checked')).map(el => el.value.toLowerCase());

  let filteredData = songs.filter(song => {
    // search
    if (searchTerm) {
      const matchesTitle = song.title.toLowerCase().includes(searchTerm);
      const matchesArtist = song.artist.toLowerCase().includes(searchTerm);
      const matchesTags = Object.keys(song.versions || {}).some(gameKey => {
        const gameNameMatch = TAGS[gameKey]?.label?.toLowerCase().includes(searchTerm);
        const specificTagsMatch = (song.versions[gameKey].tags || []).some(tag => {
            let tagLabel = TAGS[tag]?.label?.toLowerCase() || "";
            tagLabel = tagLabel.replace("chapter", "").trim();
            return tagLabel && tagLabel.includes(searchTerm);
        });
        return gameNameMatch || specificTagsMatch;
      });
      if (!matchesTitle && !matchesArtist && !matchesTags) return false;
    }

    // fav filter
    if (favOnly && !song.favorite) return false;

    // game filter
    if (selectedGames.length > 0) {
      const hasGame = selectedGames.some(game => song.versions[game]);
      if (!hasGame) return false;
    }

    // character filter
    if (selectedChars.length > 0) {
      const hasChar = Object.values(song.versions).some(v => 
        v.tags && v.tags.some(tag => selectedChars.includes(tag))
      );
      if (!hasChar) return false;
    }

    // diff filter
    if (selectedDiffs.length > 0) {
      const hasDiff = Object.values(song.versions).some(v => {
        if (!v.difficulties) return false;
        
        const songDiffKeys = Object.keys(v.difficulties).map(d => d.toLowerCase());

        return selectedDiffs.some(filterDiff => {
          if (filterDiff === 'special') {
            // special includes crash and dream
            return songDiffKeys.includes('crash') || songDiffKeys.includes('dream') || songDiffKeys.includes('special');
          }
          return songDiffKeys.includes(filterDiff);
        });
      });
      if (!hasDiff) return false;
    }

    return true; 
  });

  // sort
  const sortBy = document.querySelector('input[name="sort_by"]:checked')?.value || 'title';
  const sortDir = document.querySelector('input[name="sort_dir"]:checked')?.value || 'asc';

  if (sortBy) {
    filteredData.sort((a, b) => {
      let valA, valB;

      if (sortBy === 'title') { valA = a.title.toLowerCase(); valB = b.title.toLowerCase(); }
      else if (sortBy === 'artist') { valA = a.artist.toLowerCase(); valB = b.artist.toLowerCase(); }
      else if (sortBy === 'length') { valA = a.length; valB = b.length; }
      else if (sortBy === 'bpm') { 
        valA = parseInt(a.bpm) || 0;
        valB = parseInt(b.bpm) || 0; 
      }
      else if (sortBy === 'level') {
        const getMaxLevel = (song) => {
          let max = 0;
          Object.values(song.versions).forEach(v => {
            Object.values(v.difficulties).forEach(d => {  
              // making sure that songs with + difficulty are harder than songs without + difficulty     
              let num = parseInt(d.level) || 0;
              
              if (String(d.level).includes('+')) {
                num += 0.5;
              }
              
              // crash difficulties get higher numbers
              if (d.level === 'A') num = 100;
              if (d.level === 'B') num = 101;
              if (d.level === 'Y') num = 102;

              if (num > max) max = num;
            });
          });
          return max;
        };
        valA = getMaxLevel(a);
        valB = getMaxLevel(b);
      }

      // asc or desc order
      if (valA < valB) return sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }

  currentData = filteredData;
  selectedItem = null;
  resetDetailsPanel();

  // for no result
  const container = document.getElementById("grid-container");
  if (currentData.length === 0) {
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = "100%";
    container.innerHTML = `<div class="placeholder-text">No results match your filters.</div>`;
  } else {
    // populate grid and/or search has result
    container.style.display = "";
    container.style.justifyContent = "";
    container.style.alignItems = "";
    container.style.height = "";
    songsGrid(currentData);
  }
}

// populate grid & setup listeners
document.addEventListener("DOMContentLoaded", () => {
  if (typeof songs !== 'undefined') {
    handleSearch(); 
  } else {
    console.error("Songs node lost. System requires resynchronization.");
  }

  const searchInput = document.getElementById("search-bar");
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
  }

  const filterInputs = document.querySelectorAll('.filter-panel input');
  filterInputs.forEach(input => {
    input.addEventListener('change', handleSearch);
  });

  const randomBtn = document.getElementById('random-btn');
    if (randomBtn) {
      randomBtn.addEventListener('click', (e) => {
      e.preventDefault();     
      getRandomSong();
    });
  }

  // togle filter/sort panel
  const filterIcon = document.querySelector('.filter-icon'); 
  const filterPanel = document.getElementById('filter-panel');
  const closeFilterBtn = document.getElementById('close-filter-btn');

  if (filterIcon && filterPanel) {
    filterIcon.addEventListener('click', () => filterPanel.classList.add('open'));
  }
  if (closeFilterBtn && filterPanel) {
    closeFilterBtn.addEventListener('click', () => filterPanel.classList.remove('open'));
  }

  // reset filters
  const resetFilterBtn = document.getElementById('reset-filter-btn');
  if (resetFilterBtn) {
    // uncheck filter boxes
    resetFilterBtn.addEventListener('click', () => {
      document.querySelectorAll('.filter-panel input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
      });

      // reset sorting to defaults
      const titleRadio = document.querySelector('.filter-panel input[name="sort_by"][value="title"]');
      if (titleRadio) titleRadio.checked = true;
      const ascRadio = document.querySelector('.filter-panel input[name="sort_dir"][value="asc"]');
      if (ascRadio) ascRadio.checked = true;

      handleSearch();
    });
  }
});