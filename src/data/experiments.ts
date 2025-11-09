export type IngredientCategory =
  | "Liquids"
  | "Pantry"
  | "Household"
  | "Tools";

export type Ingredient = {
  id: string;
  label: string;
  category: IngredientCategory;
  icon: string;
};

export type Experiment = {
  id: string;
  title: string;
  shortDescription: string;
  duration: string;
  ageRange: string;
  messLevel: "Low" | "Medium" | "High";
  ingredients: string[];
  optionalExtras?: string[];
  steps: string[];
  scienceSpotlight: string;
  howToExplain: string;
  adultNote: string;
  extensionIdeas: string[];
  safetyTip?: string;
  image: {
    src: string;
    alt: string;
  };
  videoUrl: string;
};

export const INGREDIENTS: Ingredient[] = [
  { id: "water", label: "Water", category: "Liquids", icon: "💧" },
  { id: "vegetable-oil", label: "Vegetable Oil", category: "Liquids", icon: "🛢️" },
  { id: "vinegar", label: "Vinegar", category: "Liquids", icon: "🥤" },
  { id: "dish-soap", label: "Dish Soap", category: "Liquids", icon: "🧼" },
  { id: "milk", label: "Milk", category: "Liquids", icon: "🥛" },
  { id: "baking-soda", label: "Baking Soda", category: "Pantry", icon: "🥤" },
  { id: "salt", label: "Salt", category: "Pantry", icon: "🧂" },
  { id: "sugar", label: "Sugar", category: "Pantry", icon: "🍬" },
  { id: "cornstarch", label: "Cornstarch", category: "Pantry", icon: "🌽" },
  { id: "food-coloring", label: "Food Coloring", category: "Pantry", icon: "🎨" },
  { id: "raisins", label: "Raisins", category: "Pantry", icon: "🍇" },
  { id: "coffee-filter", label: "Coffee Filter", category: "Household", icon: "☕" },
  { id: "paper-towel", label: "Paper Towel", category: "Household", icon: "🧻" },
  { id: "balloon", label: "Balloon", category: "Household", icon: "🎈" },
  { id: "ice", label: "Ice Cubes", category: "Household", icon: "🧊" },
  { id: "ribbon", label: "Ribbon", category: "Household", icon: "🎀" },
  { id: "glitter", label: "Glitter", category: "Household", icon: "✨" },
  { id: "jar", label: "Jar / Tall Glass", category: "Tools", icon: "🍯" },
  { id: "clear-cup", label: "Clear Cup", category: "Tools", icon: "🥤" },
  { id: "zip-bag", label: "Zip Bag", category: "Tools", icon: "👜" },
  { id: "spoon", label: "Spoon", category: "Tools", icon: "🥄" },
  { id: "flashlight", label: "Flashlight", category: "Tools", icon: "🔦" },
  { id: "straw", label: "Drinking Straw", category: "Tools", icon: "🥤" },
  { id: "tape", label: "Tape", category: "Tools", icon: "🩹" },
  { id: "cotton-swab", label: "Cotton Swab", category: "Tools", icon: "🪥" },
];

export const INGREDIENT_LOOKUP: Record<string, Ingredient> = INGREDIENTS.reduce(
  (acc, ingredient) => {
    acc[ingredient.id] = ingredient;
    return acc;
  },
  {} as Record<string, Ingredient>,
);

export const EXPERIMENTS: Experiment[] = [
  {
    id: "rainbow-density-tower",
    title: "Rainbow Density Tower",
    shortDescription: "Stack liquids by density to build a rainbow in a jar.",
    duration: "15 min",
    ageRange: "5+",
    messLevel: "Medium",
    ingredients: [
      "jar",
      "water",
      "vegetable-oil",
      "dish-soap",
      "sugar",
      "food-coloring",
      "spoon",
    ],
    optionalExtras: ["glitter"],
    steps: [
      "Fill the jar about one-quarter full with dish soap.",
      "In a separate cup, mix water with two drops of food coloring. Carefully pour it down the inside wall of the jar to create the next layer.",
      "Mix a spoonful of sugar with water for a heavier layer and pour it in slowly.",
      "Top with vegetable oil for a golden layer. Sprinkle glitter for sparkle.",
      "Shine a flashlight through the jar to highlight the layers.",
    ],
    scienceSpotlight:
      "Each liquid has a different density. Heavier liquids sink while lighter ones float, so they naturally stack without mixing (if poured slowly).",
    howToExplain:
      "Tell your child the jar is like a race where heavy liquids win by sinking to the bottom and lighter ones float on top. Density is how 'packed together' the particles are.",
    adultNote:
      "Talk about density and miscibility. Ask prediction questions before each pour and observe what happens if the jar is slightly shaken.",
    extensionIdeas: [
      "Try using other liquids like honey or rubbing alcohol and see where they land.",
      "Stir the jar gently and time how long it takes for layers to separate again.",
    ],
    safetyTip: "Remind kids not to taste the liquids.",
    image: {
      src: "https://images.unsplash.com/photo-1529876754933-ef5acb3d2b27?auto=format&fit=crop&w=1000&q=80",
      alt: "Colorful stacked liquids forming a rainbow in a glass jar.",
    },
    videoUrl: "https://www.youtube.com/embed/v0nZgB86qAc?rel=0",
  },
  {
    id: "dancing-raisins",
    title: "Dancing Raisins Volcano",
    shortDescription: "Make raisins dance in bubbly lava with a kitchen volcano.",
    duration: "10 min",
    ageRange: "4+",
    messLevel: "Low",
    ingredients: [
      "clear-cup",
      "water",
      "baking-soda",
      "vinegar",
      "food-coloring",
      "spoon",
      "raisins",
    ],
    optionalExtras: ["glitter"],
    steps: [
      "Fill the clear cup halfway with water and stir in a spoon of baking soda.",
      "Drop in a few raisins or small pasta pieces if you have them.",
      "Add a drop of food coloring for dramatic lava.",
      "Quickly pour vinegar into the cup and watch the bubbles carry raisins up and down.",
    ],
    scienceSpotlight:
      "Carbon dioxide bubbles from the reaction stick to the raisins, making them float. When the bubbles pop, the raisins sink again.",
    howToExplain:
      "Say the bubbles are giving the raisins tiny life jackets that lift them up. When the jackets pop, they gently fall back down.",
    adultNote:
      "Point out the chemical reaction between an acid (vinegar) and a base (baking soda). Ask the child what they notice about the bubbles and movement.",
    extensionIdeas: [
      "Try other small items (corn kernels, paper clips) and compare which dance the best.",
      "Test warmer versus colder water to see which creates more bubbles.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=1000&q=80",
      alt: "Fizzing bubbles overflowing from a clear cup in a science experiment.",
    },
    videoUrl: "https://www.youtube.com/embed/4j7lPPT8XlM?rel=0",
  },
  {
    id: "magic-milk",
    title: "Magic Color-Splash Milk",
    shortDescription: "Create swirling galaxies of color in a shallow dish of milk.",
    duration: "8 min",
    ageRange: "3+",
    messLevel: "Low",
    ingredients: ["milk", "dish-soap", "food-coloring", "clear-cup", "spoon"],
    optionalExtras: ["cotton-swab"],
    steps: [
      "Pour milk into a shallow dish or clear cup until it just covers the bottom.",
      "Add drops of different food colors near the center.",
      "Dip a cotton swab or the back of a spoon into dish soap.",
      "Touch the center of the milk and watch the colors race away and swirl.",
    ],
    scienceSpotlight:
      "Dish soap breaks up the fat in milk, pushing the colors around as it tries to mix. Surface tension changes create the swirling motion.",
    howToExplain:
      "Tell your child the soap is chasing the fat in the milk, pushing the colors out of the way like speedboats on water.",
    adultNote:
      "After the big swirl, talk about why the motion slows down. Discuss surface tension and how soap helps us clean greasy dishes.",
    extensionIdeas: [
      "Repeat with almond milk or water and compare the motion.",
      "Try sprinkling pepper on the milk to make the 'germs run away' demonstration.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1000&q=80",
      alt: "Swirls of bright food coloring in milk creating galaxy-like patterns.",
    },
    videoUrl: "https://www.youtube.com/embed/Gf33ueRXMzQ?rel=0",
  },
  {
    id: "paper-chromatography",
    title: "Rainbow Ink Detective",
    shortDescription: "Split marker colors into hidden rainbows using coffee filters.",
    duration: "20 min",
    ageRange: "6+",
    messLevel: "Low",
    ingredients: ["coffee-filter", "water", "clear-cup", "spoon"],
    optionalExtras: ["paper-towel", "ribbon"],
    steps: [
      "Cut the coffee filter into strips about two inches wide.",
      "Draw a thick dot with washable markers about one inch from the bottom of each strip.",
      "Pour a small amount of water into the cup—just enough to cover the bottom.",
      "Hang the strip so only the blank bottom touches the water. Tape it to a pencil laid across the cup if needed.",
      "Watch the water climb the paper and separate the marker ink into different colors.",
    ],
    scienceSpotlight:
      "Different color pigments travel at different speeds with the water. This is called chromatography and it's how scientists separate mixtures.",
    howToExplain:
      "Say the water is giving each color a piggyback ride. Some colors run faster, so they end up farther up the paper.",
    adultNote:
      "Connect this to real-world uses like detective work and testing food dyes. Encourage kids to record which colors appear first.",
    extensionIdeas: [
      "Try non-washable markers and note the difference.",
      "Use coffee-filter flowers tied with ribbon for a colorful craft afterward.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1455657251262-0aa73d8d70e6?auto=format&fit=crop&w=1000&q=80",
      alt: "Strips of coffee filter paper displaying separated rainbow colors.",
    },
    videoUrl: "https://www.youtube.com/embed/BtQ7b2hA2Sw?rel=0",
  },
  {
    id: "frost-wizard",
    title: "Flash-Freeze Frost Wizard",
    shortDescription: "Pull frost from the air using ice, salt, and a metal can.",
    duration: "25 min",
    ageRange: "7+",
    messLevel: "Medium",
    ingredients: ["ice", "salt", "water", "clear-cup", "spoon"],
    optionalExtras: ["flashlight"],
    steps: [
      "Fill a metal can or sturdy cup with ice cubes until nearly full.",
      "Sprinkle salt generously over the ice and stir with a spoon.",
      "Add a splash of water to help the salt touch every cube.",
      "Wait 5–10 minutes and run your fingers over the outside—frost begins to form!",
      "Shine a flashlight to make the crystals sparkle like wizard magic.",
    ],
    scienceSpotlight:
      "Salt lowers the freezing point of water, pulling energy from the air. The can gets so cold that water vapor in the air freezes on its surface.",
    howToExplain:
      "Explain that the salt asks the ice to melt, which makes everything super cold. The air water gets chilly and turns into frost right on the can.",
    adultNote:
      "Talk about phase changes and energy transfer. Mention real-world uses like salting icy roads in winter.",
    extensionIdeas: [
      "Test different salts (rock, table, sea) and compare frost speed.",
      "Record the temperature drop with a kitchen thermometer if available.",
    ],
    safetyTip: "The can becomes very cold—hand your child a towel or gloves.",
    image: {
      src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80",
      alt: "Frost forming on a chilled metal can with ice crystals visible.",
    },
    videoUrl: "https://www.youtube.com/embed/Y5zJEuNM24w?rel=0",
  },
  {
    id: "balloon-rocket",
    title: "Ribbon Rocket Race",
    shortDescription: "Launch a balloon rocket along a ribbon race track.",
    duration: "15 min",
    ageRange: "4+",
    messLevel: "Low",
    ingredients: ["balloon", "ribbon", "straw", "tape"],
    optionalExtras: ["flashlight"],
    steps: [
      "Thread a straw through a long ribbon and stretch the ribbon tight across the room (tie ends to chairs).",
      "Blow up a balloon without tying it—pinch the opening closed.",
      "Tape the balloon to the straw so it points along the ribbon.",
      "Count down and release! The air rushing out launches the balloon down the track.",
      "Repeat with bigger or smaller balloons and time the races.",
    ],
    scienceSpotlight:
      "Air rushing out of the balloon pushes in the opposite direction (Newton's Third Law), making the balloon speed forward.",
    howToExplain:
      "Describe the balloon like a rocket: the air shooting out the back pushes it forward through space.",
    adultNote:
      "Discuss action versus reaction forces. Encourage predictions about which balloon sizes or ribbon angles will be fastest.",
    extensionIdeas: [
      "Make two tracks side by side for a race and chart winners.",
      "Add paper fins or draw designs on the balloon for creativity.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1000&q=80",
      alt: "A child launching a colorful balloon rocket across a room.",
    },
    videoUrl: "https://www.youtube.com/embed/TQmTeKJ5c0E?rel=0",
  },
];
