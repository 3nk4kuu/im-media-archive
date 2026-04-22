# iM Media Archive

An interactive song catalog designed for fans of the Cytus series. This project serves as a digital archive for browsing songs, filtering by characters/difficulty, and exploring detailed chart information with a CyTus II inspired interface.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Design:** Google Fonts, Figma (UI Planning and SVG icons)

---

## Features

* **Dynamic Grid:** Browse through a visual gallery of song covers that update instantly based on your active filters.
* **Advanced Filtering:** Narrow down your search by Game (Cytus/Cytus II), Characters/Chapters, Chart Difficulty (Including default and sepcial difficulties), and personal favorites.
* **Smart Search:** Search by song title, artist, or specific game characters/chapters.
* **Detailed Side Panel:** View album art, BPM, track length, and chart information for all available versions of a song.
* **Song Randomizer:** Use the "Shuffle" feature to pick a random track from your currently filtered list.
* **Custom UI:** Features custom-styled tooltips, a unique themed scrollbar, and interactive favorite toggles.

---

## Technical Implementation

**ID-Based Data Handling:**
* Uses numeric IDs instead of song titles
* Prevents issues with special characters
* Keeps UI state consistent (e.g., selected song)

**Search Improvements**
* Handles nested data across game versions
* Iterates through tags to find matches
* Cleans strings (e.g., removes “chapter”) to avoid false results

**Filtering System**
* Supports multiple filters at once (game, character, difficulty)
* Only shows songs that match all selected filters

**Sorting Logic**
* Handles difficulty symbols and special cases (crash & dream difficulties)
* Accounts for “+” levels for accurate ordering

---

## Future Improvements (Potential Updates)

* Add fuzzy search to handle typos and close matches
* Add sound effects for button clicks and song selection
* Implement song previews (play short clips when a song is selected)
* Link difficulty tags or songs to platforms like YouTube or Spotify
* Add background music when the site loads or when no song is selected

---

*<sub>Developed as part of the SEA Stage 2 Project.</sub>*
