export enum PlayerColor {
  RED = 0,
  BLUE = 1,
  GREEN = 2,
  PINK = 3,
  ORANGE = 4,
  YELLOW = 5,
  BLACK = 6,
  WHITE = 7,
  PURPLE = 8,
  BROWN = 9,
  CYAN = 10,
  LIME = 11,
}

export enum PlayerSkin {
  None = 0,
  Astro = 1,
  Capt = 2,
  Mech = 3,
  Military = 4,
  Police = 5,
  Science = 6,
  SuitB = 7,
  SuitW = 8,
  Wall = 9,
  Hazmat = 10,
  Security = 11,
  Tarmac = 12,
  Miner = 13,
  Winter = 14,
  Archae = 15,
}

export enum PlayerHat {
  None = 0,
  Astronaut = 1,
  BaseballCap = 2,
  BrainSlug = 3,
  BushHat = 4,
  CaptainsHat = 5,
  DoubleTopHat = 6,
  Flowerpot = 7,
  Goggles = 8,
  HardHat = 9,
  Military = 10,
  PaperHat = 11,
  PartyHat = 12,
  Police = 13,
  Stethescope = 14,
  TopHat = 15,
  TowelWizard = 16,
  Ushanka = 17,
  Viking = 18,
  WallCap = 19,
  Snowman = 20,
  Reindeer = 21,
  Lights = 22,
  Santa = 23,
  Tree = 24,
  Present = 25,
  Candycanes = 26,
  ElfHat = 27,
  NewYears2018 = 28,
  WhiteHat = 29,
  Crown = 30,
  Eyebrows = 31,
  HaloHat = 32,
  HeroCap = 33,
  PipCap = 34,
  PlungerHat = 35,
  ScubaHat = 36,
  StickminHat = 37,
  StrawHat = 38,
  TenGallonHat = 39,
  ThirdEyeHat = 40,
  ToiletPaperHat = 41,
  Toppat = 42,
  Fedora = 43,
  Goggles_2 = 44,
  Headphones = 45,
  MaskHat = 46,
  PaperMask = 47,
  Security = 48,
  StrapHat = 49,
  Banana = 50,
  Beanie = 51,
  Bear = 52,
  Cheese = 53,
  Cherry = 54,
  Egg = 55,
  Fedora_2 = 56,
  Flamingo = 57,
  FlowerPin = 58,
  Helmet = 59,
  Plant = 60,
  BatEyes = 61,
  BatWings = 62,
  Horns = 63,
  Mohawk = 64,
  Pumpkin = 65,
  ScaryBag = 66,
  Witch = 67,
  Wolf = 68,
  Pirate = 69,
  Plague = 70,
  Machete = 71,
  Fred = 72,
  MinerCap = 73,
  WinterHat = 74,
  Archae = 75,
  Antenna = 76,
  Balloon = 77,
  BirdNest = 78,
  BlackBelt = 79,
  Caution = 80,
  Chef = 81,
  CopHat = 82,
  DoRag = 83,
  DumSticker = 84,
  Fez = 85,
  GeneralHat = 86,
  GreyThing = 87,
  HunterCap = 88,
  JungleHat = 89,
  MiniCrewmate = 90,
  NinjaMask = 91,
  RamHorns = 92,
  Snowman_2 = 93,
}

export enum PlayerPet {
  None = 0,
  Alien = 1,
  Crewmate = 2,
  Doggy = 3,
  Stickmin = 4,
  Hamster = 5,
  Robot = 6,
  UFO = 7,
  Ellie = 8,
  Squig = 9,
  Bedcrab = 10,
}

export enum SkeldVents {
  Admin = 0,
  RightHallway = 1,
  Cafeteria = 2,
  Electrical = 3,
  UpperEngine = 4,
  Security = 5,
  Medbay = 6,
  Weapons = 7,
  LowerReactor = 8,
  LowerEngine = 9,
  Shields = 10,
  UpperReactor = 11,
  UpperNavigation = 12,
  LowerNavigation = 13,
}

export enum MiraHQVents {
  Balcony = 1,
  Cafeteria = 2,
  Reactor = 3,
  Laboratory = 4,
  Office = 5,
  Admin = 6,
  Greenhouse = 7,
  Medbay = 8,
  Decontamination = 9,
  LockerRoom = 10,
  Launchpad = 11,
}

export enum PolusVents {
  Security = 0,
  Electrical = 1,
  O2 = 2,
  Communcations = 3,
  Office = 4,
  Admin = 5,
  Laboratory = 6,
  Lava = 7,
  Storage = 8,
  RightSeismic = 9,
  LeftSeismic = 10,
  AdminOutside = 11,
}

export type Vent = SkeldVents | MiraHQVents | PolusVents;
