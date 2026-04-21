const TAGS = {
  // games
  CYTUS: { label: "Cytus", color: "#008080", type: "game" },
  CYTUS_II: { label: "Cytus II", color: "#7A9D96", type: "game" },

  // cytus i groups
  CHAPTER_1: { label: "Chapter 1", color: "#999", type: "group" },
  CHAPTER_2: { label: "Chapter 2", color: "#999", type: "group" },
  CHAPTER_3: { label: "Chapter 3", color: "#999", type: "group" },
  CHAPTER_6: { label: "Chapter 6", color: "#999", type: "group" },
  CHAPTER_8: { label: "Chapter 8", color: "#999", type: "group" },
  CHAPTER_9: { label: "Chapter 9", color: "#999", type: "group" },
  CHAPTER_10: { label: "Chapter 10", color: "#999", type: "group" },
  CHAPTER_D: { label: "Chapter D", color: "#999", type: "group" },
  CHAPTER_K: { label: "Chapter K", color: "#999", type: "group" },
  CHAPTER_M: { label: "Chapter M", color: "#999", type: "group" },

  // cytus ii groups
  NEKO: { label: "NEKO#ΦωΦ", color: "#F2295B", type: "group" },
  PAFF: { label: "PAFF", color: "#CAE4DB", type: "group" },
  ROBO: { label: "ROBO_Head", color: "#DCE9F0", type: "group" },
  IVY: { label: "Ivy", color: "#FF0000", type: "group" },
  GRAFF_J: { label: "Graff.J", color: "#C9F143", type: "group" },

  // status
  NOT_CLEARED: { label: "Not Cleared", color: "#999", type: "status" },
  RANK_C: { label: "Rank C", color: "#C0C0C0", type: "status" },
  RANK_B: { label: "Rank B", color: "#00FFFF", type: "status" },
  RANK_A: { label: "Rank A", color: "#B0FF00", type: "status" },
  RANK_S: { label: "Rank S", color: "#ff5dec", type: "status" },
  MM: { label: "Million Master", color: "#FFD700", type: "status" },
};

const songs = [
  // cytus ii songs
  {
    title: "BATTLE NO.1",
    artist: "TANO*C Sound Team",
    bpm: "200",
    length: 132,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 5, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
          chaos: { level: 15, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Sovereign",
    artist: "LureRabbit",
    bpm: "160-220",
    length: 148,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
          chaos: { level: 14, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Σ",
    artist: "DJ Myosuke & Gram & t+pazolite",
    bpm: "222",
    length: 153,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 6, status: "NOT_CLEARED" },
          hard: { level: 10, status: "NOT_CLEARED" },
          chaos: { level: "15+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "FUJIN Rumble",
    artist: "COSIO(ZUNTATA) from GROOVE COASTER",
    bpm: "192",
    length: 123,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["GRAFF_J"],
        difficulties: {
          easy: { level: 5, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
          chaos: { level: "14+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "CHAOS",
    artist: "Æsir",
    bpm: "80-150",
    length: 223,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 5, status: "NOT_CLEARED" },
          hard: { level: 10, status: "NOT_CLEARED" },
          chaos: { level: "14+", status: "NOT_CLEARED" },
          glitch: { level: "15+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Pure Powerstomper",
    artist: "M-Project feat. Jonjo",
    bpm: "125-177",
    length: 140,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
          chaos: { level: 13, status: "NOT_CLEARED" },
          glitch: { level: 14, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Happiness Breeze",
    artist: "3R2 as DJ Mashiro",
    bpm: "185",
    length: 144,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
          chaos: { level: 12, status: "NOT_CLEARED" },
          glitch: { level: "14+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Brain Power",
    artist: "NOMA",
    bpm: "170-173",
    length: 150,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
          chaos: { level: 13, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Gravity",
    artist: "M2U",
    bpm: "128",
    length: 161,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["PAFF"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
          chaos: { level: "12+", status: "NOT_CLEARED" },
          glitch: { level: "13+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Blow My Mind",
    artist: "3R2",
    bpm: "175",
    length: 139,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
          chaos: { level: 14, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Devillic Sphere",
    artist: "3R2",
    bpm: "160",
    length: 130,
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
          chaos: { level: 13, status: "NOT_CLEARED" },
          crash: { level: "α", status: "NOT_CLEARED" },
        }
      }
    }
  },

  // cytus
  {
    title: "Music. The Eternity of Us",
    artist: "Mai Aoyagi",
    bpm: "105.2",
    length: 181,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_K"],
        difficulties: {
          easy: { level: 2, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "COMA",
    artist: "ensou",
    bpm: "180",
    length: 118,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_9"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Angelic Sphere",
    artist: "3R2",
    bpm: "143",
    length: 146,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_D"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Niflheimr",
    artist: "xi",
    bpm: "180",
    length: 148,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_6"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Knight of Firmament",
    artist: "Eye XY",
    bpm: "120-220 (Main: 155)",
    length: 137,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_K"],
        difficulties: {
          easy: { level: 2, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Storia",
    artist: "xi vs sakuzyo",
    bpm: "180",
    length: 252,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_M"],
        difficulties: {
          easy: { level: 7, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Precipitation",
    artist: "ICE",
    bpm: "167",
    length: 120,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_2"],
        difficulties: {
          easy: { level: 7, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Otome",
    artist: "SUZUMETUNE",
    bpm: "147",
    length: 132,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_3"],
        difficulties: {
          easy: { level: 5, status: "NOT_CLEARED" },
          hard: { level: 7, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Laplace",
    artist: "sakuzyo",
    bpm: "155",
    length: 105,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_8"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Reverence",
    artist: "Vospi",
    bpm: "172",
    length: 134,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_8"],
        difficulties: {
          easy: { level: 3, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
        }
      }
    }
  },

  // cytus & cytus ii
  {
    title: "Halcyon",
    artist: "xi",
    bpm: "191",
    length: 157,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_3"],
        difficulties: {
          easy: { level: 7, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
          chaos: { level: 14, status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Freedom Dive",
    artist: "xi",
    bpm: "222.22",
    length: 146,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_10"],
        difficulties: {
          easy: { level: 6, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 6, status: "NOT_CLEARED" },
          hard: { level: 10, status: "NOT_CLEARED" },
          chaos: { level: "15+", status: "NOT_CLEARED" },
        }
      }
    }
  },
  {
    title: "Oriens",
    artist: "ginkiha",
    bpm: "140-185",
    length: 122,
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_9"],
        difficulties: {
          easy: { level: 6, status: "NOT_CLEARED" },
          hard: { level: 9, status: "NOT_CLEARED" },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4, status: "NOT_CLEARED" },
          hard: { level: 8, status: "NOT_CLEARED" },
          chaos: { level: 13, status: "NOT_CLEARED" },
        }
      }
    }
  }
];