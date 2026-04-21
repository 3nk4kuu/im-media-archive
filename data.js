const TAGS = {
  // games
  CYTUS: { label: "Cytus", type: "game" },
  CYTUS_II: { label: "Cytus II", type: "game" },

  // cytus i groups
  CHAPTER_1: { label: "Chapter 1", type: "group" },
  CHAPTER_2: { label: "Chapter 2", type: "group" },
  CHAPTER_3: { label: "Chapter 3", type: "group" },
  CHAPTER_6: { label: "Chapter 6", type: "group" },
  CHAPTER_8: { label: "Chapter 8", type: "group" },
  CHAPTER_9: { label: "Chapter 9", type: "group" },
  CHAPTER_10: { label: "Chapter 10", type: "group" },
  CHAPTER_D: { label: "Chapter D", type: "group" },
  CHAPTER_K: { label: "Chapter K", type: "group" },
  CHAPTER_M: { label: "Chapter M", type: "group" },

  // cytus ii groups
  NEKO: { label: "NEKO#ΦωΦ", type: "group" },
  PAFF: { label: "PAFF", type: "group" },
  ROBO: { label: "ROBO_Head", type: "group" },
  IVY: { label: "Ivy", type: "group" },
  GRAFF_J: { label: "Graff.J", type: "group" },
  ALICE: {label: "Alice", type: "group"},
};

const songs = [
  // cytus ii songs
  {
    id: 1,
    title: "BATTLE NO.1",
    artist: "TANO*C Sound Team",
    bpm: "200",
    length: 132,
    cover: "https://static.wikia.nocookie.net/cytus/images/5/5b/BATTLENO1.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 9 },
          chaos: { level: 15 },
        }
      }
    }
  },
  {
    id: 2,
    title: "Sovereign",
    artist: "LureRabbit",
    bpm: "160-220",
    length: 148,
    cover: "https://static.wikia.nocookie.net/cytus/images/a/ae/Sovereign.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 8 },
          chaos: { level: 14 },
        }
      }
    }
  },
  {
    id: 3,
    title: "Σ",
    artist: "DJ Myosuke & Gram & t+pazolite",
    bpm: "222",
    length: 153,
    cover: "https://static.wikia.nocookie.net/cytus/images/c/ce/SigmaORG.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 6 },
          hard: { level: 10 },
          chaos: { level: "15+" },
        }
      }
    }
  },
  {
    id: 4,
    title: "FUJIN Rumble",
    artist: "COSIO(ZUNTATA) from GROOVE COASTER",
    bpm: "192",
    length: 123,
    cover: "https://static.wikia.nocookie.net/cytus/images/a/a3/FUJIN_Rumble.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["GRAFF_J"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 9 },
          chaos: { level: "14+" },
        }
      }
    }
  },
  {
    id: 5,
    title: "CHAOS",
    artist: "Æsir",
    bpm: "80-150",
    length: 223,
    cover: "https://static.wikia.nocookie.net/cytus/images/f/f0/CHAOS.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 10 },
          chaos: { level: "14+" },
          glitch: { level: "15+" },
        }
      }
    }
  },
  {
    id: 6,
    title: "Pure Powerstomper",
    artist: "M-Project feat. Jonjo",
    bpm: "125-177",
    length: 140,
    cover: "https://static.wikia.nocookie.net/cytus/images/6/60/Pure_Powerstomper.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 8 },
          chaos: { level: 13 },
          glitch: { level: 14 },
        }
      }
    }
  },
  {
    id: 7,
    title: "Happiness Breeze",
    artist: "3R2 as DJ Mashiro",
    bpm: "185",
    length: 144,
    cover: "https://static.wikia.nocookie.net/cytus/images/8/8b/Happiness_Breeze.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 7 },
          chaos: { level: 12 },
          glitch: { level: "14+" },
        }
      }
    }
  },
  {
    id: 8,
    title: "Brain Power",
    artist: "NOMA",
    bpm: "170-173",
    length: 150,
    cover: "https://static.wikia.nocookie.net/cytus/images/e/e7/Brain_Power.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 8 },
          chaos: { level: 13 },
        }
      }
    }
  },
  {
    id: 9,
    title: "Gravity",
    artist: "M2U",
    bpm: "128",
    length: 161,
    cover: "https://static.wikia.nocookie.net/cytus/images/1/1a/Gravity.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["PAFF"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 7 },
          chaos: { level: "12+" },
          glitch: { level: "13+" },
        }
      }
    }
  },
  {
    id: 10,
    title: "Blow My Mind",
    artist: "3R2",
    bpm: "175",
    length: 139,
    cover: "https://static.wikia.nocookie.net/cytus/images/3/31/Blow_My_Mind_%28Full_Image%29.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 9 },
          chaos: { level: 14 },
        }
      }
    }
  },
  {
    id: 11,
    title: "Devillic Sphere",
    artist: "3R2",
    bpm: "160",
    length: 130,
    cover: "https://static.wikia.nocookie.net/cytus/images/a/a8/Devillic_Sphere.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 9 },
          chaos: { level: 13 },
          crash: { level: "α" },
        }
      }
    }
  },
  // extra difficulties testing
  {
    id: 12,
    title: "ANiMA",
    artist: "xi",
    bpm: "183.5",
    length: 119,
    cover: "https://static.wikia.nocookie.net/cytus/images/d/d6/ANiMA.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ALICE"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 10 },
          chaos: { level: "15+" },
          dream: { level: 15 },
        }
      }
    }
  },
  {
    id: 13,
    title: "PrayStation (HiTECH NINJA Remix)",
    artist: "HiTECH NINJA",
    bpm: "153",
    length: 130,
    cover: "https://static.wikia.nocookie.net/cytus/images/0/02/Praystation_%28HiTECH_NINJA_Remix%29.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 8 },
          chaos: { level: "13+" }
        }
      }
    }
  },
  {
    id: 14,
    title: "B.B.K.K.B.K.K. (2023 Remake)",
    artist: "nora2r",
    bpm: "170",
    length: 143,
    cover: "https://static.wikia.nocookie.net/cytus/images/d/d7/BBKKBKK.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["GRAFF_J"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 8 },
          chaos: { level: 13 },
        }
      }
    }
  },
  {
    id: 15,
    title: "Keep it up",
    artist: "uma",
    bpm: "280",
    length: 116,
    cover: "https://static.wikia.nocookie.net/cytus/images/a/a5/Keep_it_up.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["NEKO"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 8 },
          chaos: { level: 14 },
          crash: { level: "γ" },
        }
      }
    }
  },
  {
    id: 16,
    title: "Make Me Burn",
    artist: "JAKAZiD",
    bpm: "140",
    length: 144,
    cover: "https://static.wikia.nocookie.net/cytus/images/8/8d/Make_Me_Burn.png",
    favorite: false,
    versions: {
      CYTUS_II: {
        tags: ["ROBO"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 6 },
          chaos: { level: 13 },
          crash: { level: "β" },
        }
      }
    }
  },

  // cytus
  {
    id: 17,
    title: "Music. The Eternity of Us",
    artist: "Mai Aoyagi",
    bpm: "105.2",
    length: 181,
    cover: "https://static.wikia.nocookie.net/cytus/images/5/54/K-10.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_K"],
        difficulties: {
          easy: { level: 2 },
          hard: { level: 7 },
        }
      }
    }
  },
  {
    id: 18,
    title: "COMA",
    artist: "ensou",
    bpm: "180",
    length: 118,
    cover: "https://static.wikia.nocookie.net/cytus/images/2/26/9-9.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_9"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 8 },
        }
      }
    }
  },
  {
    id: 19,
    title: "Angelic Sphere",
    artist: "3R2",
    bpm: "143",
    length: 146,
    cover: "https://static.wikia.nocookie.net/cytus/images/d/df/D-8.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_D"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 7 },
        }
      }
    }
  },
  {
    id: 20,
    title: "Niflheimr",
    artist: "xi",
    bpm: "180",
    length: 148,
    cover: "https://static.wikia.nocookie.net/cytus/images/1/1b/6-8.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_6"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 8 },
        }
      }
    }
  },
  {
    id: 21,
    title: "Knight of Firmament",
    artist: "Eye XY",
    bpm: "120-220 (Main: 155)",
    length: 137,
    cover: "https://static.wikia.nocookie.net/cytus/images/c/c5/K-5.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_K"],
        difficulties: {
          easy: { level: 2 },
          hard: { level: 7 },
        }
      }
    }
  },
  {
    id: 22,
    title: "Storia",
    artist: "xi vs sakuzyo",
    bpm: "180",
    length: 252,
    cover: "https://static.wikia.nocookie.net/cytus/images/1/13/M-10.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_M"],
        difficulties: {
          easy: { level: 7 },
          hard: { level: 9 },
        }
      }
    }
  },
  {
    id: 23,
    title: "Precipitation",
    artist: "ICE",
    bpm: "167",
    length: 120,
    cover: "https://static.wikia.nocookie.net/cytus/images/3/3e/2-6.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_2"],
        difficulties: {
          easy: { level: 7 },
          hard: { level: 8 },
        }
      }
    }
  },
  {
    id: 24,
    title: "Otome",
    artist: "SUZUMETUNE",
    bpm: "147",
    length: 132,
    cover: "https://static.wikia.nocookie.net/cytus/images/2/25/3-5.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_3"],
        difficulties: {
          easy: { level: 5 },
          hard: { level: 7 },
        }
      }
    }
  },
  {
    id: 25,
    title: "Laplace",
    artist: "sakuzyo",
    bpm: "155",
    length: 105,
    cover: "https://static.wikia.nocookie.net/cytus/images/9/97/8-5.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_8"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 9 },
        }
      }
    }
  },
  {
    id: 26,
    title: "Reverence",
    artist: "Vospi",
    bpm: "172",
    length: 134,
    cover: "https://static.wikia.nocookie.net/cytus/images/f/f6/8-10.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_8"],
        difficulties: {
          easy: { level: 3 },
          hard: { level: 8 },
        }
      }
    }
  },

  // cytus & cytus ii
  {
    id: 27,
    title: "Halcyon",
    artist: "xi",
    bpm: "191",
    length: 157,
    cover: "https://static.wikia.nocookie.net/cytus/images/b/ba/3-7.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_3"],
        difficulties: {
          easy: { level: 7 },
          hard: { level: 9 },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 9 },
          chaos: { level: 14 },
        }
      }
    }
  },
  {
    id: 28,
    title: "Freedom Dive",
    artist: "xi",
    bpm: "222.22",
    length: 146,
    cover: "https://static.wikia.nocookie.net/cytus/images/f/f1/10-1.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_10"],
        difficulties: {
          easy: { level: 6 },
          hard: { level: 9 },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 6 },
          hard: { level: 10 },
          chaos: { level: "15+" },
        }
      }
    }
  },
  {
    id: 29,
    title: "Oriens",
    artist: "ginkiha",
    bpm: "140-185",
    length: 122,
    cover: "https://static.wikia.nocookie.net/cytus/images/1/11/9-1.png",
    favorite: false,
    versions: {
      CYTUS: {
        tags: ["CHAPTER_9"],
        difficulties: {
          easy: { level: 6 },
          hard: { level: 9 },
        }
      },
      CYTUS_II: {
        tags: ["IVY"],
        difficulties: {
          easy: { level: 4 },
          hard: { level: 8 },
          chaos: { level: 13 },
        }
      }
    }
  }
];