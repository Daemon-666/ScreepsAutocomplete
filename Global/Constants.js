const OK = 0;
const ERR_NOT_OWNER = -1;
const ERR_NO_PATH = -2;
const ERR_NAME_EXISTS = -3;
const ERR_BUSY = -4;
const ERR_NOT_FOUND = -5;
const ERR_NOT_ENOUGH_ENERGY = -6;
const ERR_NOT_ENOUGH_RESOURCES =-6;
const ERR_INVALID_TARGET = -7;
const ERR_FULL = -8;
const ERR_NOT_IN_RANGE = -9;
const ERR_INVALID_ARGS = -10;
const ERR_TIRED = -11;
const ERR_NO_BODYPART = -12;
const ERR_NOT_ENOUGH_EXTENSIONS = -6;
const ERR_RCL_NOT_ENOUGH = -14;
const ERR_GCL_NOT_ENOUGH = -15;

const FIND_EXIT_TOP = 1;
const FIND_EXIT_RIGHT = 3;
const FIND_EXIT_BOTTOM = 5;
const FIND_EXIT_LEFT = 7;
const FIND_EXIT = 10;
const FIND_CREEPS = 101;
const FIND_MY_CREEPS = 102;
const FIND_HOSTILE_CREEPS = 103;
const FIND_SOURCES_ACTIVE = 104;
const FIND_SOURCES = 105;
const FIND_DROPPED_RESOURCES = 106;
const FIND_STRUCTURES = 107;
const FIND_MY_STRUCTURES = 108;
const FIND_HOSTILE_STRUCTURES = 109;
const FIND_FLAGS = 110;
const FIND_CONSTRUCTION_SITES = 111;
const FIND_MY_SPAWNS = 112;
const FIND_HOSTILE_SPAWNS = 113;
const FIND_MY_CONSTRUCTION_SITES = 114;
const FIND_HOSTILE_CONSTRUCTION_SITES = 115;
const FIND_MINERALS = 116;
const FIND_NUKES = 117;
const FIND_TOMBSTONES = 118;
const FIND_POWER_CREEPS = 119;
const FIND_MY_POWER_CREEPS = 120;
const FIND_HOSTILE_POWER_CREEPS = 121;
const FIND_DEPOSITS = 122;
const FIND_RUINS = 123;

const TOP = 1;
const TOP_RIGHT = 2;
const RIGHT = 3;
const BOTTOM_RIGHT = 4;
const BOTTOM = 5;
const BOTTOM_LEFT = 6;
const LEFT = 7;
const TOP_LEFT = 8;

const COLOR_RED = 1;
const COLOR_PURPLE = 2;
const COLOR_BLUE = 3;
const COLOR_CYAN = 4;
const COLOR_GREEN = 5;
const COLOR_YELLOW = 6;
const COLOR_ORANGE = 7;
const COLOR_BROWN = 8;
const COLOR_GREY = 9;
const COLOR_WHITE = 10;

const LOOK_CREEPS = "creep";
const LOOK_ENERGY = "energy";
const LOOK_RESOURCES = "resource";
const LOOK_SOURCES = "source";
const LOOK_MINERALS = "mineral";
const LOOK_DEPOSITS = "deposit";
const LOOK_STRUCTURES = "structure";
const LOOK_FLAGS = "flag";
const LOOK_CONSTRUCTION_SITES = "constructionSite";
const LOOK_NUKES = "nuke";
const LOOK_TERRAIN = "terrain";
const LOOK_TOMBSTONES = "tombstone";
const LOOK_POWER_CREEPS = "powerCreep";
const LOOK_RUINS = "ruin";

const OBSTACLE_OBJECT_TYPES = ["spawn", "creep", "powerCreep", "source", "mineral", "deposit", "controller", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal", "nuker", "factory", "invaderCore"];

const MOVE = "move";
const WORK = "work";
const CARRY = "carry";
const ATTACK = "attack";
const RANGED_ATTACK = "ranged_attack";
const TOUGH = "tough";
const HEAL = "heal";
const CLAIM =  "claim";

const BODYPART_COST = {
    "move": 50,
    "work": 100,
    "attack": 80,
    "carry": 50,
    "heal": 250,
    "ranged_attack": 150,
    "tough": 10,
    "claim": 600
};

// WORLD_WIDTH and WORLD_HEIGHT constants are deprecated, please use Game.map.getWorldSize() instead
const WORLD_WIDTH = 202;
const WORLD_HEIGHT = 202;

const CREEP_LIFE_TIME = 1500;
const CREEP_CLAIM_LIFE_TIME = 600;
const CREEP_CORPSE_RATE = 0.2;
const CREEP_PART_MAX_ENERGY = 125;

const CARRY_CAPACITY = 50;
const HARVEST_POWER = 2;
const HARVEST_MINERAL_POWER = 1;
const HARVEST_DEPOSIT_POWER = 1;
const REPAIR_POWER = 100;
const DISMANTLE_POWER = 50;
const BUILD_POWER = 5;
const ATTACK_POWER = 30;
const UPGRADE_CONTROLLER_POWER = 1;
const RANGED_ATTACK_POWER = 10;
const HEAL_POWER = 12;
const RANGED_HEAL_POWER = 4;
const REPAIR_COST = 0.01;
const DISMANTLE_COST = 0.005;

const RAMPART_DECAY_AMOUNT = 300;
const RAMPART_DECAY_TIME = 100;
const RAMPART_HITS = 1;
const RAMPART_HITS_MAX = {2: 300000, 3: 1000000, 4: 3000000, 5: 10000000, 6: 30000000, 7: 100000000, 8: 300000000};

const ENERGY_REGEN_TIME = 300;
const ENERGY_DECAY = 1000;

const SPAWN_HITS = 5000;
const SPAWN_ENERGY_START = 300;
const SPAWN_ENERGY_CAPACITY = 300;
const CREEP_SPAWN_TIME = 3;
const SPAWN_RENEW_RATIO = 1.2;

const SOURCE_ENERGY_CAPACITY = 3000;
const SOURCE_ENERGY_NEUTRAL_CAPACITY = 1500;
const SOURCE_ENERGY_KEEPER_CAPACITY = 4000;

const WALL_HITS = 1;
const WALL_HITS_MAX = 300000000;

const EXTENSION_HITS = 1000;
const EXTENSION_ENERGY_CAPACITY = {0: 50, 1: 50, 2: 50, 3: 50, 4: 50, 5: 50, 6: 50, 7: 100, 8: 200};

const ROAD_HITS = 5000;
const ROAD_WEAROUT = 1;
const ROAD_WEAROUT_POWER_CREEP = 100;
const ROAD_DECAY_AMOUNT = 100;
const ROAD_DECAY_TIME = 1000;

const LINK_HITS = 1000;
const LINK_HITS_MAX = 1000;
const LINK_CAPACITY = 800;
const LINK_COOLDOWN = 1;
const LINK_LOSS_RATIO = 0.03;

const STORAGE_CAPACITY = 1000000;
const STORAGE_HITS = 10000;

const STRUCTURE_SPAWN = "spawn";
const STRUCTURE_EXTENSION = "extension";
const STRUCTURE_ROAD = "road";
const STRUCTURE_WALL = "constructedWall";
const STRUCTURE_RAMPART = "rampart";
const STRUCTURE_KEEPER_LAIR = "keeperLair";
const STRUCTURE_PORTAL = "portal";
const STRUCTURE_CONTROLLER = "controller";
const STRUCTURE_LINK = "link";
const STRUCTURE_STORAGE = "storage";
const STRUCTURE_TOWER = "tower";
const STRUCTURE_OBSERVER = "observer";
const STRUCTURE_POWER_BANK = "powerBank";
const STRUCTURE_POWER_SPAWN = "powerSpawn";
const STRUCTURE_EXTRACTOR = "extractor";
const STRUCTURE_LAB = "lab";
const STRUCTURE_TERMINAL = "terminal";
const STRUCTURE_CONTAINER = "container";
const STRUCTURE_NUKER = "nuker";
const STRUCTURE_FACTORY = "factory";
const STRUCTURE_INVADER_CORE = "invaderCore";

const CONSTRUCTION_COST = {
    "spawn": 15000,
    "extension": 3000,
    "road": 300,
    "constructedWall": 1,
    "rampart": 1,
    "link": 5000,
    "storage": 30000,
    "tower": 5000,
    "observer": 8000,
    "powerSpawn": 100000,
    "extractor": 5000,
    "lab": 50000,
    "terminal": 100000,
    "container": 5000,
    "nuker": 100000,
    "factory": 100000
};
const CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;
const CONSTRUCTION_COST_ROAD_WALL_RATIO = 150;

const CONTROLLER_LEVELS = {1: 200, 2: 45000, 3: 135000, 4: 405000, 5: 1215000, 6: 3645000, 7: 10935000};
const CONTROLLER_STRUCTURES = {
    "spawn": {0: 0, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3},
    "extension": {0: 0, 1: 0, 2: 5, 3: 10, 4: 20, 5: 30, 6: 40, 7: 50, 8: 60},
    "link": {1: 0, 2: 0, 3: 0, 4: 0, 5: 2, 6: 3, 7: 4, 8: 6},
    "road": {0: 2500, 1: 2500, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
    "constructedWall": {1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
    "rampart": {1: 0, 2: 2500, 3: 2500, 4: 2500, 5: 2500, 6: 2500, 7: 2500, 8: 2500},
    "storage": {1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1},
    "tower": {1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 6},
    "observer": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1},
    "powerSpawn": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1},
    "extractor": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1},
    "terminal": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1},
    "lab": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 3, 7: 6, 8: 10},
    "container": {0: 5, 1: 5, 2: 5, 3: 5, 4: 5, 5: 5, 6: 5, 7: 5, 8: 5},
    "nuker": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 1},
    "factory": {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 1, 8: 1}
};
const CONTROLLER_DOWNGRADE = {1: 20000, 2: 10000, 3: 20000, 4: 40000, 5: 80000, 6: 120000, 7: 150000, 8: 200000};
const CONTROLLER_DOWNGRADE_RESTORE = 100;
const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD = 5000;
const CONTROLLER_CLAIM_DOWNGRADE = 300;
const CONTROLLER_RESERVE = 1;
const CONTROLLER_RESERVE_MAX = 5000;
const CONTROLLER_MAX_UPGRADE_PER_TICK = 15;
const CONTROLLER_ATTACK_BLOCKED_UPGRADE = 1000;
const CONTROLLER_NUKE_BLOCKED_UPGRADE = 200;

const SAFE_MODE_DURATION = 20000;
const SAFE_MODE_COOLDOWN = 50000;
const SAFE_MODE_COST = 1000;

const TOWER_HITS = 3000;
const TOWER_CAPACITY = 1000;
const TOWER_ENERGY_COST = 10;
const TOWER_POWER_ATTACK = 600;
const TOWER_POWER_HEAL = 400;
const TOWER_POWER_REPAIR = 800;
const TOWER_OPTIMAL_RANGE = 5;
const TOWER_FALLOFF_RANGE = 20;
const TOWER_FALLOFF = 0.75;

const OBSERVER_HITS = 500;
const OBSERVER_RANGE = 10;

const POWER_BANK_HITS = 2000000;
const POWER_BANK_CAPACITY_MAX = 5000;
const POWER_BANK_CAPACITY_MIN = 500;
const POWER_BANK_CAPACITY_CRIT = 0.3;
const POWER_BANK_DECAY = 5000;
const POWER_BANK_HIT_BACK = 0.5;

const POWER_SPAWN_HITS = 5000;
const POWER_SPAWN_ENERGY_CAPACITY = 5000;
const POWER_SPAWN_POWER_CAPACITY = 100;
const POWER_SPAWN_ENERGY_RATIO = 50;

const EXTRACTOR_HITS = 500;
const EXTRACTOR_COOLDOWN = 5;

const LAB_HITS = 500;
const LAB_MINERAL_CAPACITY = 3000;
const LAB_ENERGY_CAPACITY = 2000;
const LAB_BOOST_ENERGY = 20;
const LAB_BOOST_MINERAL = 30;
const LAB_COOLDOWN = 10;           // not used
const LAB_REACTION_AMOUNT = 5;
const LAB_UNBOOST_ENERGY = 0;
const LAB_UNBOOST_MINERAL = 15;

const GCL_POW = 2.4;
const GCL_MULTIPLY = 1000000;
const GCL_NOVICE = 3;

const MODE_SIMULATION = null;
const MODE_WORLD = null;

const TERRAIN_MASK_WALL = 1;
const TERRAIN_MASK_SWAMP = 2;
const TERRAIN_MASK_LAVA = 4;

const MAX_CONSTRUCTION_SITES = 100;
const MAX_CREEP_SIZE = 50;

const MINERAL_REGEN_TIME = 50000;
const MINERAL_MIN_AMOUNT = {
    "H": 35000,
    "O": 35000,
    "L": 35000,
    "K": 35000,
    "Z": 35000,
    "U": 35000,
    "X": 35000
};
const MINERAL_RANDOM_FACTOR = 2;

const MINERAL_DENSITY = {
    1: 15000,
    2: 35000,
    3: 70000,
    4: 100000
};
const MINERAL_DENSITY_PROBABILITY   = {
    1: 0.1,
    2: 0.5,
    3: 0.9,
    4: 1.0
};
const MINERAL_DENSITY_CHANGE = 0.05;

const DENSITY_LOW = 1;
const DENSITY_MODERATE = 2;
const DENSITY_HIGH = 3;
const DENSITY_ULTRA = 4;

const DEPOSIT_EXHAUST_MULTIPLY = 0.001;
const DEPOSIT_EXHAUST_POW = 1.2;
const DEPOSIT_DECAY_TIME = 50000;

const TERMINAL_CAPACITY = 300000;
const TERMINAL_HITS = 3000;
const TERMINAL_SEND_COST = 0.1;
const TERMINAL_MIN_SEND = 100;
const TERMINAL_COOLDOWN = 10;

const CONTAINER_HITS = 250000;
const CONTAINER_CAPACITY = 2000;
const CONTAINER_DECAY = 5000;
const CONTAINER_DECAY_TIME = 100;
const CONTAINER_DECAY_TIME_OWNED = 500;

const NUKER_HITS = 1000;
const NUKER_COOLDOWN = 100000;
const NUKER_ENERGY_CAPACITY = 300000;
const NUKER_GHODIUM_CAPACITY = 5000;
const NUKE_LAND_TIME = 50000;
const NUKE_RANGE = 10;
const NUKE_DAMAGE = {
    0: 10000000,
    2: 5000000
};

const FACTORY_HITS = 1000;
const FACTORY_CAPACITY = 50000;

const TOMBSTONE_DECAY_PER_PART = 5;
const TOMBSTONE_DECAY_POWER_CREEP = 500;

const RUIN_DECAY = 500;
const RUIN_DECAY_STRUCTURES = {
    'powerBank': 10
};

const PORTAL_DECAY = 30000;

const ORDER_SELL = "sell";
const ORDER_BUY = "buy";

const MARKET_FEE = 0.05;

const MARKET_MAX_ORDERS = 300;
const MARKET_ORDER_LIFE_TIME = 1000*60*60*24*30;

const FLAGS_LIMIT = 10000;

const SUBSCRIPTION_TOKEN = "token";

const RESOURCE_ENERGY = "energy";
const RESOURCE_POWER = "power";

const RESOURCE_HYDROGEN = "H";
const RESOURCE_OXYGEN = "O";
const RESOURCE_UTRIUM = "U";
const RESOURCE_LEMERGIUM = "L";
const RESOURCE_KEANIUM = "K";
const RESOURCE_ZYNTHIUM = "Z";
const RESOURCE_CATALYST = "X";
const RESOURCE_GHODIUM = "G";

const RESOURCE_SILICON = 'silicon';
const RESOURCE_METAL = 'metal';
const RESOURCE_BIOMASS = 'biomass';
const RESOURCE_MIST = 'mist';

const RESOURCE_HYDROXIDE = "OH";
const RESOURCE_ZYNTHIUM_KEANITE = "ZK";
const RESOURCE_UTRIUM_LEMERGITE = "UL";

const RESOURCE_UTRIUM_HYDRIDE = "UH";
const RESOURCE_UTRIUM_OXIDE = "UO";
const RESOURCE_KEANIUM_HYDRIDE = "KH";
const RESOURCE_KEANIUM_OXIDE = "KO";
const RESOURCE_LEMERGIUM_HYDRIDE = "LH";
const RESOURCE_LEMERGIUM_OXIDE = "LO";
const RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
const RESOURCE_ZYNTHIUM_OXIDE = "ZO";
const RESOURCE_GHODIUM_HYDRIDE = "GH";
const RESOURCE_GHODIUM_OXIDE = "GO";

const RESOURCE_UTRIUM_ACID = "UH2O";
const RESOURCE_UTRIUM_ALKALIDE = "UHO2";
const RESOURCE_KEANIUM_ACID = "KH2O";
const RESOURCE_KEANIUM_ALKALIDE = "KHO2";
const RESOURCE_LEMERGIUM_ACID = "LH2O";
const RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
const RESOURCE_ZYNTHIUM_ACID = "ZH2O";
const RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
const RESOURCE_GHODIUM_ACID = "GH2O";
const RESOURCE_GHODIUM_ALKALIDE = "GHO2";

const RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
const RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
const RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
const RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
const RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
const RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";
const RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
const RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

const RESOURCE_OPS = "ops";

const RESOURCE_UTRIUM_BAR = 'utrium_bar';
const RESOURCE_LEMERGIUM_BAR = 'lemergium_bar';
const RESOURCE_ZYNTHIUM_BAR = 'zynthium_bar';
const RESOURCE_KEANIUM_BAR = 'keanium_bar';
const RESOURCE_GHODIUM_MELT = 'ghodium_melt';
const RESOURCE_OXIDANT = 'oxidant';
const RESOURCE_REDUCTANT = 'reductant';
const RESOURCE_PURIFIER = 'purifier';
const RESOURCE_BATTERY = 'battery';

const RESOURCE_COMPOSITE = 'composite';
const RESOURCE_CRYSTAL = 'crystal';
const RESOURCE_LIQUID = 'liquid';

const RESOURCE_WIRE = 'wire';
const RESOURCE_SWITCH = 'switch';
const RESOURCE_TRANSISTOR = 'transistor';
const RESOURCE_MICROCHIP = 'microchip';
const RESOURCE_CIRCUIT = 'circuit';
const RESOURCE_DEVICE = 'device';

const RESOURCE_CELL = 'cell';
const RESOURCE_PHLEGM = 'phlegm';
const RESOURCE_TISSUE = 'tissue';
const RESOURCE_MUSCLE = 'muscle';
const RESOURCE_ORGANOID = 'organoid';
const RESOURCE_ORGANISM = 'organism';

const RESOURCE_ALLOY = 'alloy';
const RESOURCE_TUBE = 'tube';
const RESOURCE_FIXTURES = 'fixtures';
const RESOURCE_FRAME = 'frame';
const RESOURCE_HYDRAULICS = 'hydraulics';
const RESOURCE_MACHINE = 'machine';

const RESOURCE_CONDENSATE = 'condensate';
const RESOURCE_CONCENTRATE = 'concentrate';
const RESOURCE_EXTRACT = 'extract';
const RESOURCE_SPIRIT = 'spirit';
const RESOURCE_EMANATION = 'emanation';
const RESOURCE_ESSENCE = 'essence';

const REACTIONS = {
    H: {
        O: "OH",
        L: "LH",
        K: "KH",
        U: "UH",
        Z: "ZH",
        G: "GH"
    },
    O: {
        H: "OH",
        L: "LO",
        K: "KO",
        U: "UO",
        Z: "ZO",
        G: "GO"
    },
    Z: {
        K: "ZK",
        H: "ZH",
        O: "ZO"
    },
    L: {
        U: "UL",
        H: "LH",
        O: "LO"
    },
    K: {
        Z: "ZK",
        H: "KH",
        O: "KO"
    },
    G: {
        H: "GH",
        O: "GO"
    },
    U: {
        L: "UL",
        H: "UH",
        O: "UO"
    },
    OH: {
        UH: "UH2O",
        UO: "UHO2",
        ZH: "ZH2O",
        ZO: "ZHO2",
        KH: "KH2O",
        KO: "KHO2",
        LH: "LH2O",
        LO: "LHO2",
        GH: "GH2O",
        GO: "GHO2"
    },
    X: {
        UH2O: "XUH2O",
        UHO2: "XUHO2",
        LH2O: "XLH2O",
        LHO2: "XLHO2",
        KH2O: "XKH2O",
        KHO2: "XKHO2",
        ZH2O: "XZH2O",
        ZHO2: "XZHO2",
        GH2O: "XGH2O",
        GHO2: "XGHO2"
    },
    ZK: {
        UL: "G"
    },
    UL: {
        ZK: "G"
    },
    LH: {
        OH: "LH2O"
    },
    ZH: {
        OH: "ZH2O"
    },
    GH: {
        OH: "GH2O"
    },
    KH: {
        OH: "KH2O"
    },
    UH: {
        OH: "UH2O"
    },
    LO: {
        OH: "LHO2"
    },
    ZO: {
        OH: "ZHO2"
    },
    KO: {
        OH: "KHO2"
    },
    UO: {
        OH: "UHO2"
    },
    GO: {
        OH: "GHO2"
    },
    LH2O: {
        X: "XLH2O"
    },
    KH2O: {
        X: "XKH2O"
    },
    ZH2O: {
        X: "XZH2O"
    },
    UH2O: {
        X: "XUH2O"
    },
    GH2O: {
        X: "XGH2O"
    },
    LHO2: {
        X: "XLHO2"
    },
    UHO2: {
        X: "XUHO2"
    },
    KHO2: {
        X: "XKHO2"
    },
    ZHO2: {
        X: "XZHO2"
    },
    GHO2: {
        X: "XGHO2"
    }
};

const BOOSTS = {
    work: {
        UO: {
            harvest: 3
        },
        UHO2: {
            harvest: 5
        },
        XUHO2: {
            harvest: 7
        },
        LH: {
            build: 1.5,
            repair: 1.5
        },
        LH2O: {
            build: 1.8,
            repair: 1.8
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.5
        },
        GH2O: {
            upgradeController: 1.8
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
};

const REACTION_TIME = {
    OH: 20,
    ZK: 5,
    UL: 5,
    G: 5,
    UH: 10,
    UH2O: 5,
    XUH2O: 60,
    UO: 10,
    UHO2: 5,
    XUHO2: 60,
    KH: 10,
    KH2O: 5,
    XKH2O: 60,
    KO: 10,
    KHO2: 5,
    XKHO2: 60,
    LH: 15,
    LH2O: 10,
    XLH2O: 65,
    LO: 10,
    LHO2: 5,
    XLHO2: 60,
    ZH: 20,
    ZH2O: 40,
    XZH2O: 160,
    ZO: 10,
    ZHO2: 5,
    XZHO2: 60,
    GH: 10,
    GH2O: 15,
    XGH2O: 80,
    GO: 10,
    GHO2: 30,
    XGHO2: 150,
};

const PORTAL_UNSTABLE = 10*24*3600*1000;
const PORTAL_MIN_TIMEOUT = 12*24*3600*1000;
const PORTAL_MAX_TIMEOUT = 22*24*3600*1000;

const POWER_BANK_RESPAWN_TIME = 50000;

const INVADERS_ENERGY_GOAL = 100000;

const SYSTEM_USERNAME = 'Screeps';

// SIGN_NOVICE_AREA and SIGN_RESPAWN_AREA constants are deprecated, please use SIGN_PLANNED_AREA instead
const SIGN_NOVICE_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
const SIGN_RESPAWN_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';
const SIGN_PLANNED_AREA = 'A new Novice or Respawn Area is being planned somewhere in this sector. Please make sure all important rooms are reserved.';

const EVENT_ATTACK = 1;
const EVENT_OBJECT_DESTROYED = 2;
const EVENT_ATTACK_CONTROLLER = 3;
const EVENT_BUILD = 4;
const EVENT_HARVEST = 5;
const EVENT_HEAL = 6;
const EVENT_REPAIR = 7;
const EVENT_RESERVE_CONTROLLER = 8;
const EVENT_UPGRADE_CONTROLLER = 9;
const EVENT_EXIT = 10;
const EVENT_POWER = 11;
const EVENT_TRANSFER = 12;

const EVENT_ATTACK_TYPE_MELEE = 1;
const EVENT_ATTACK_TYPE_RANGED = 2;
const EVENT_ATTACK_TYPE_RANGED_MASS = 3;
const EVENT_ATTACK_TYPE_DISMANTLE = 4;
const EVENT_ATTACK_TYPE_HIT_BACK = 5;
const EVENT_ATTACK_TYPE_NUKE = 6;

const EVENT_HEAL_TYPE_MELEE = 1;
const EVENT_HEAL_TYPE_RANGED = 2;

const POWER_LEVEL_MULTIPLY = 1000;
const POWER_LEVEL_POW = 2;
const POWER_CREEP_SPAWN_COOLDOWN = 8*3600*1000;
const POWER_CREEP_DELETE_COOLDOWN = 24*3600*1000;
const POWER_CREEP_MAX_LEVEL = 25;
const POWER_CREEP_LIFE_TIME = 5000;

const POWER_CLASS = {
    OPERATOR: 'operator'
};

const PWR_GENERATE_OPS = 1;
const PWR_OPERATE_SPAWN = 2;
const PWR_OPERATE_TOWER = 3;
const PWR_OPERATE_STORAGE = 4;
const PWR_OPERATE_LAB = 5;
const PWR_OPERATE_EXTENSION = 6;
const PWR_OPERATE_OBSERVER = 7;
const PWR_OPERATE_TERMINAL = 8;
const PWR_DISRUPT_SPAWN = 9;
const PWR_DISRUPT_TOWER = 10;
const PWR_DISRUPT_SOURCE = 11;
const PWR_SHIELD = 12;
const PWR_REGEN_SOURCE = 13;
const PWR_REGEN_MINERAL = 14;
const PWR_DISRUPT_TERMINAL = 15;
const PWR_OPERATE_POWER = 16;
const PWR_FORTIFY = 17;
const PWR_OPERATE_CONTROLLER = 18;
const PWR_OPERATE_FACTORY = 19;

const EFFECT_INVULNERABILITY = 1001;
const EFFECT_COLLAPSE_TIMER = 1002;

const INVADER_CORE_HITS = 100000;
const INVADER_CORE_CREEP_SPAWN_TIME = {
    0: 0, 1: 0, 2: 6, 3: 3, 4: 2, 5: 1
};
const INVADER_CORE_EXPAND_TIME = { 1: 4000, 2: 3500, 3: 3000, 4: 2500, 5: 2000 };
const INVADER_CORE_CONTROLLER_POWER = 2;
const INVADER_CORE_CONTROLLER_DOWNGRADE = 5000;
const STRONGHOLD_RAMPART_HITS = { 0: 0, 1: 50000, 2: 200000, 3: 500000, 4: 1000000, 5: 2000000 };
const STRONGHOLD_DECAY_TICKS = 75000;



const POWER_INFO = {
    [PWR_GENERATE_OPS]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        effect: [1, 2, 4, 6, 8]
    },
    [PWR_OPERATE_SPAWN]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 300,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [0.9, 0.7, 0.5, 0.35, 0.2]
    },
    [PWR_OPERATE_TOWER]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 10,
        duration: 100,
        range: 3,
        ops: 10,
        effect: [1.1, 1.2, 1.3, 1.4, 1.5]
    },
    [PWR_OPERATE_STORAGE]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 800,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [500000,1000000,2000000,4000000,7000000]
    },
    [PWR_OPERATE_LAB]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        duration: 1000,
        range: 3,
        ops: 10,
        effect: [2,4,6,8,10]
    },
    [PWR_OPERATE_EXTENSION]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 50,
        range: 3,
        ops: 2,
        effect: [0.2, 0.4, 0.6, 0.8, 1.0]
    },
    [PWR_OPERATE_OBSERVER]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 400,
        duration: [200,400,600,800,1000],
        range: 3,
        ops: 10,
    },
    [PWR_OPERATE_TERMINAL]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 500,
        duration: 1000,
        range: 3,
        ops: 100,
        effect: [0.9, 0.8, 0.7, 0.6, 0.5]
    },
    [PWR_DISRUPT_SPAWN]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 5,
        range: 20,
        ops: 10,
        duration: [1,2,3,4,5]
    },
    [PWR_DISRUPT_TOWER]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 0,
        duration: 5,
        range: 50,
        ops: 10,
        effect: [0.9, 0.8, 0.7, 0.6, 0.5],
    },
    [PWR_DISRUPT_SOURCE]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 100,
        range: 3,
        ops: 100,
        duration: [100, 200, 300, 400, 500]
    },
    [PWR_SHIELD]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        effect: [5000, 10000, 15000, 20000, 25000],
        duration: 50,
        cooldown: 20,
        energy: 100,
    },
    [PWR_REGEN_SOURCE]: {
        className: POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 100,
        duration: 300,
        range: 3,
        effect: [50,100,150,200,250],
        period: 15
    },
    [PWR_REGEN_MINERAL]: {
        className: POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 100,
        duration: 100,
        range: 3,
        effect: [2,4,6,8,10],
        period: 10
    },
    [PWR_DISRUPT_TERMINAL]: {
        className: POWER_CLASS.OPERATOR,
        level: [20, 21, 22, 23, 24],
        cooldown: 8,
        duration: 10,
        range: 50,
        ops: [50,40,30,20,10]

    },
    [PWR_FORTIFY]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 5,
        range: 3,
        ops: 5,
        duration: [1, 2, 3, 4, 5]
    },
    [PWR_OPERATE_POWER]: {
        className: POWER_CLASS.OPERATOR,
        level: [10, 11, 12, 14, 22],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 200,
        effect: [1, 2, 3, 4, 5]
    },
    [PWR_OPERATE_CONTROLLER]: {
        className: POWER_CLASS.OPERATOR,
        level: [20, 21, 22, 23, 24],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 200,
        effect: [10, 20, 30, 40, 50]
    },
    [PWR_OPERATE_FACTORY]: {
        className: POWER_CLASS.OPERATOR,
        level: [0, 2, 7, 14, 22],
        cooldown: 800,
        range: 3,
        duration: 1000,
        ops: 100
    },
};

const BODYPARTS_ALL = [
    MOVE,
    WORK,
    CARRY,
    ATTACK,
    RANGED_ATTACK,
    TOUGH,
    HEAL,
    CLAIM
];
const RESOURCES_ALL = [
    RESOURCE_ENERGY,
    RESOURCE_POWER,

    RESOURCE_HYDROGEN,
    RESOURCE_OXYGEN,
    RESOURCE_UTRIUM,
    RESOURCE_KEANIUM,
    RESOURCE_LEMERGIUM,
    RESOURCE_ZYNTHIUM,
    RESOURCE_CATALYST,
    RESOURCE_GHODIUM,

    RESOURCE_HYDROXIDE,
    RESOURCE_ZYNTHIUM_KEANITE,
    RESOURCE_UTRIUM_LEMERGITE,

    RESOURCE_UTRIUM_HYDRIDE,
    RESOURCE_UTRIUM_OXIDE,
    RESOURCE_KEANIUM_HYDRIDE,
    RESOURCE_KEANIUM_OXIDE,
    RESOURCE_LEMERGIUM_HYDRIDE,
    RESOURCE_LEMERGIUM_OXIDE,
    RESOURCE_ZYNTHIUM_HYDRIDE,
    RESOURCE_ZYNTHIUM_OXIDE,
    RESOURCE_GHODIUM_HYDRIDE,
    RESOURCE_GHODIUM_OXIDE,

    RESOURCE_UTRIUM_ACID,
    RESOURCE_UTRIUM_ALKALIDE,
    RESOURCE_KEANIUM_ACID,
    RESOURCE_KEANIUM_ALKALIDE,
    RESOURCE_LEMERGIUM_ACID,
    RESOURCE_LEMERGIUM_ALKALIDE,
    RESOURCE_ZYNTHIUM_ACID,
    RESOURCE_ZYNTHIUM_ALKALIDE,
    RESOURCE_GHODIUM_ACID,
    RESOURCE_GHODIUM_ALKALIDE,

    RESOURCE_CATALYZED_UTRIUM_ACID,
    RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
    RESOURCE_CATALYZED_KEANIUM_ACID,
    RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
    RESOURCE_CATALYZED_LEMERGIUM_ACID,
    RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
    RESOURCE_CATALYZED_ZYNTHIUM_ACID,
    RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
    RESOURCE_CATALYZED_GHODIUM_ACID,
    RESOURCE_CATALYZED_GHODIUM_ALKALIDE,

    RESOURCE_OPS,

    RESOURCE_SILICON,
    RESOURCE_METAL,
    RESOURCE_BIOMASS,
    RESOURCE_MIST,

    RESOURCE_UTRIUM_BAR,
    RESOURCE_LEMERGIUM_BAR,
    RESOURCE_ZYNTHIUM_BAR,
    RESOURCE_KEANIUM_BAR,
    RESOURCE_GHODIUM_MELT,
    RESOURCE_OXIDANT,
    RESOURCE_REDUCTANT,
    RESOURCE_PURIFIER,
    RESOURCE_BATTERY,
    RESOURCE_COMPOSITE,
    RESOURCE_CRYSTAL,
    RESOURCE_LIQUID,

    RESOURCE_WIRE,
    RESOURCE_SWITCH,
    RESOURCE_TRANSISTOR,
    RESOURCE_MICROCHIP,
    RESOURCE_CIRCUIT,
    RESOURCE_DEVICE,

    RESOURCE_CELL,
    RESOURCE_PHLEGM,
    RESOURCE_TISSUE,
    RESOURCE_MUSCLE,
    RESOURCE_ORGANOID,
    RESOURCE_ORGANISM,

    RESOURCE_ALLOY,
    RESOURCE_TUBE,
    RESOURCE_FIXTURES,
    RESOURCE_FRAME,
    RESOURCE_HYDRAULICS,
    RESOURCE_MACHINE,

    RESOURCE_CONDENSATE,
    RESOURCE_CONCENTRATE,
    RESOURCE_EXTRACT,
    RESOURCE_SPIRIT,
    RESOURCE_EMANATION,
    RESOURCE_ESSENCE
];
const COLORS_ALL = [
    COLOR_RED,
    COLOR_PURPLE,
    COLOR_BLUE,
    COLOR_CYAN,
    COLOR_GREEN,
    COLOR_YELLOW,
    COLOR_ORANGE,
    COLOR_BROWN,
    COLOR_GREY,
    COLOR_WHITE
];
const INTERSHARD_RESOURCES = [
    SUBSCRIPTION_TOKEN
];
const COMMODITIES = {
    [RESOURCE_UTRIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_UTRIUM]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_UTRIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_UTRIUM_BAR]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_LEMERGIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_LEMERGIUM]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_LEMERGIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_LEMERGIUM_BAR]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_ZYNTHIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_ZYNTHIUM]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_ZYNTHIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_ZYNTHIUM_BAR]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_KEANIUM_BAR]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_KEANIUM]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_KEANIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_KEANIUM_BAR]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_GHODIUM_MELT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_GHODIUM]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_GHODIUM]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_GHODIUM_MELT]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_OXIDANT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_OXYGEN]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_OXYGEN]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_OXIDANT]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_REDUCTANT]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_HYDROGEN]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_HYDROGEN]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_REDUCTANT]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_PURIFIER]: {
        amount: 100,
        cooldown: 20,
        components: {
            [RESOURCE_CATALYST]: 500,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_CATALYST]: {
        amount: 500,
        cooldown: 20,
        components: {
            [RESOURCE_PURIFIER]: 100,
            [RESOURCE_ENERGY]: 200
        }
    },
    [RESOURCE_BATTERY]: {
        amount: 50,
        cooldown: 10,
        components: {
            [RESOURCE_ENERGY]: 600
        }
    },
    [RESOURCE_ENERGY]: {
        amount: 500,
        cooldown: 10,
        components: {
            [RESOURCE_BATTERY]: 50
        }
    },
    [RESOURCE_COMPOSITE]: {
        level: 1,
        amount: 20,
        cooldown: 50,
        components: {
            [RESOURCE_UTRIUM_BAR]: 20,
            [RESOURCE_ZYNTHIUM_BAR]: 20,
            [RESOURCE_ENERGY]: 20
        }
    },
    [RESOURCE_CRYSTAL]: {
        level: 2,
        amount: 6,
        cooldown: 21,
        components: {
            [RESOURCE_LEMERGIUM_BAR]: 6,
            [RESOURCE_KEANIUM_BAR]: 6,
            [RESOURCE_PURIFIER]: 6,
            [RESOURCE_ENERGY]: 45
        }
    },
    [RESOURCE_LIQUID]: {
        level: 3,
        amount: 12,
        cooldown: 60,
        components: {
            [RESOURCE_OXIDANT]: 12,
            [RESOURCE_REDUCTANT]: 12,
            [RESOURCE_GHODIUM_MELT]: 12,
            [RESOURCE_ENERGY]: 90
        }
    },

    [RESOURCE_WIRE]: {
        amount: 20,
        cooldown: 8,
        components: {
            [RESOURCE_UTRIUM_BAR]: 20,
            [RESOURCE_SILICON]: 100,
            [RESOURCE_ENERGY]: 40
        }
    },
    [RESOURCE_SWITCH]: {
        level: 1,
        amount: 5,
        cooldown: 70,
        components: {
            [RESOURCE_WIRE]: 40,
            [RESOURCE_OXIDANT]: 95,
            [RESOURCE_UTRIUM_BAR]: 35,
            [RESOURCE_ENERGY]: 20
        }
    },
    [RESOURCE_TRANSISTOR]: {
        level: 2,
        amount: 1,
        cooldown: 59,
        components: {
            [RESOURCE_SWITCH]: 4,
            [RESOURCE_WIRE]: 15,
            [RESOURCE_REDUCTANT]: 85,
            [RESOURCE_ENERGY]: 8
        }
    },
    [RESOURCE_MICROCHIP]: {
        level: 3,
        amount: 1,
        cooldown: 250,
        components: {
            [RESOURCE_TRANSISTOR]: 2,
            [RESOURCE_COMPOSITE]: 50,
            [RESOURCE_WIRE]: 117,
            [RESOURCE_PURIFIER]: 25,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_CIRCUIT]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [RESOURCE_MICROCHIP]: 1,
            [RESOURCE_TRANSISTOR]: 5,
            [RESOURCE_SWITCH]: 4,
            [RESOURCE_OXIDANT]: 115,
            [RESOURCE_ENERGY]: 32
        }
    },
    [RESOURCE_DEVICE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [RESOURCE_CIRCUIT]: 1,
            [RESOURCE_MICROCHIP]: 3,
            [RESOURCE_CRYSTAL]: 110,
            [RESOURCE_GHODIUM_MELT]: 150,
            [RESOURCE_ENERGY]: 64
        }
    },

    [RESOURCE_CELL]: {
        amount: 20,
        cooldown: 8,
        components: {
            [RESOURCE_LEMERGIUM_BAR]: 20,
            [RESOURCE_BIOMASS]: 100,
            [RESOURCE_ENERGY]: 40
        }
    },
    [RESOURCE_PHLEGM]: {
        level: 1,
        amount: 2,
        cooldown: 35,
        components: {
            [RESOURCE_CELL]: 20,
            [RESOURCE_OXIDANT]: 36,
            [RESOURCE_LEMERGIUM_BAR]: 16,
            [RESOURCE_ENERGY]: 8
        }
    },
    [RESOURCE_TISSUE]: {
        level: 2,
        amount: 2,
        cooldown: 164,
        components: {
            [RESOURCE_PHLEGM]: 10,
            [RESOURCE_CELL]: 10,
            [RESOURCE_REDUCTANT]: 110,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_MUSCLE]: {
        level: 3,
        amount: 1,
        cooldown: 250,
        components: {
            [RESOURCE_TISSUE]: 3,
            [RESOURCE_PHLEGM]: 3,
            [RESOURCE_ZYNTHIUM_BAR]: 50,
            [RESOURCE_REDUCTANT]: 50,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_ORGANOID]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [RESOURCE_MUSCLE]: 1,
            [RESOURCE_TISSUE]: 5,
            [RESOURCE_PURIFIER]: 208,
            [RESOURCE_OXIDANT]: 256,
            [RESOURCE_ENERGY]: 32
        }
    },
    [RESOURCE_ORGANISM]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [RESOURCE_ORGANOID]: 1,
            [RESOURCE_LIQUID]: 150,
            [RESOURCE_TISSUE]: 6,
            [RESOURCE_CELL]: 310,
            [RESOURCE_ENERGY]: 64
        }
    },

    [RESOURCE_ALLOY]: {
        amount: 20,
        cooldown: 8,
        components: {
            [RESOURCE_ZYNTHIUM_BAR]: 20,
            [RESOURCE_METAL]: 100,
            [RESOURCE_ENERGY]: 40
        }
    },
    [RESOURCE_TUBE]: {
        level: 1,
        amount: 2,
        cooldown: 45,
        components: {
            [RESOURCE_ALLOY]: 40,
            [RESOURCE_ZYNTHIUM_BAR]: 16,
            [RESOURCE_ENERGY]: 8
        }
    },
    [RESOURCE_FIXTURES]: {
        level: 2,
        amount: 1,
        cooldown: 115,
        components: {
            [RESOURCE_COMPOSITE]: 20,
            [RESOURCE_ALLOY]: 41,
            [RESOURCE_OXIDANT]: 161,
            [RESOURCE_ENERGY]: 8
        }
    },
    [RESOURCE_FRAME]: {
        level: 3,
        amount: 1,
        cooldown: 125,
        components: {
            [RESOURCE_FIXTURES]: 2,
            [RESOURCE_TUBE]: 4,
            [RESOURCE_REDUCTANT]: 330,
            [RESOURCE_ZYNTHIUM_BAR]: 31,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_HYDRAULICS]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [RESOURCE_LIQUID]: 150,
            [RESOURCE_FIXTURES]: 3,
            [RESOURCE_TUBE]: 15,
            [RESOURCE_PURIFIER]: 208,
            [RESOURCE_ENERGY]: 32
        }
    },
    [RESOURCE_MACHINE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [RESOURCE_HYDRAULICS]: 1,
            [RESOURCE_FRAME]: 2,
            [RESOURCE_FIXTURES]: 3,
            [RESOURCE_TUBE]: 12,
            [RESOURCE_ENERGY]: 64
        }
    },

    [RESOURCE_CONDENSATE]: {
        amount: 20,
        cooldown: 8,
        components: {
            [RESOURCE_KEANIUM_BAR]: 20,
            [RESOURCE_MIST]: 100,
            [RESOURCE_ENERGY]: 40
        }
    },
    [RESOURCE_CONCENTRATE]: {
        level: 1,
        amount: 3,
        cooldown: 41,
        components: {
            [RESOURCE_CONDENSATE]: 30,
            [RESOURCE_KEANIUM_BAR]: 15,
            [RESOURCE_REDUCTANT]: 54,
            [RESOURCE_ENERGY]: 12
        }
    },
    [RESOURCE_EXTRACT]: {
        level: 2,
        amount: 2,
        cooldown: 128,
        components: {
            [RESOURCE_CONCENTRATE]: 10,
            [RESOURCE_CONDENSATE]: 30,
            [RESOURCE_OXIDANT]: 60,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_SPIRIT]: {
        level: 3,
        amount: 1,
        cooldown: 200,
        components: {
            [RESOURCE_EXTRACT]: 2,
            [RESOURCE_CONCENTRATE]: 6,
            [RESOURCE_REDUCTANT]: 90,
            [RESOURCE_PURIFIER]: 20,
            [RESOURCE_ENERGY]: 16
        }
    },
    [RESOURCE_EMANATION]: {
        level: 4,
        amount: 1,
        cooldown: 800,
        components: {
            [RESOURCE_SPIRIT]: 2,
            [RESOURCE_EXTRACT]: 2,
            [RESOURCE_CONCENTRATE]: 3,
            [RESOURCE_KEANIUM_BAR]: 112,
            [RESOURCE_ENERGY]: 32
        }
    },
    [RESOURCE_ESSENCE]: {
        level: 5,
        amount: 1,
        cooldown: 600,
        components: {
            [RESOURCE_EMANATION]: 1,
            [RESOURCE_SPIRIT]: 3,
            [RESOURCE_CRYSTAL]: 110,
            [RESOURCE_GHODIUM_MELT]: 150,
            [RESOURCE_ENERGY]: 64
        }
    },
};
