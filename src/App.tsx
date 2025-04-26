import './App.css'

interface ScriptLine {
  role: string;
  text: string;
}

const script: ScriptLine[] = [
  { role: "Narrator", text: "Hello everyone! My name is Ollie. My name is Kelly. My name is Ryder. Today, we are going to tell you a story about an adventure! The candy House!" },
  { role: "Narrator", text: "Once upon a time, three best friends, Kelly, Ollie, and Ryder, went on an adventure in the forest. They loved playing and finding new things. One sunny afternoon, they followed a path of colorful flowers. Suddenly, they saw something amazing — a house made of candy!" },
  { role: "Kelly", text: "Is that a candy house?" },
  { role: "Ollie", text: "It looks delicious! Let’s go closer!" },
  { role: "Ryder", text: "Wow! It smells like chocolate and cotton candy!" },
  { role: "Narrator", text: "The house had chocolate walls, a gummy bear roof, and jelly windows. The door was made of a big cookie. The friends couldn’t believe their eyes." },
  { role: "Ollie", text: "I would like to eat the chocolate wall!" },
  { role: "Ryder", text: "The cookie door opened by itself. Let’s go inside!" },
  { role: "Narrator", text: "Inside, everything was even sweeter. The chairs were made of marshmallows, the tables were cookies, and the floor was caramel." },
  { role: "Kelly", text: "This is so soft and yummy!" },
  { role: "Ollie", text: "I love this place!" },
  { role: "Elf", text: "Who is eating my house?" },
  { role: "Narrator", text: "A tiny elf flew in! She had sparkly wings, a shiny green hat, and carried a little wand." },
  { role: "Kelly", text: "I’m sorry, ma’am. Your house looks so tasty. We just took a little bite." },
  { role: "Elf", text: "I understand, my dear children. But too much candy is not good. It can hurt your teeth and make you sick." },
  { role: "Ryder", text: "Oh no… I didn’t think about that." },
  { role: "Ollie", text: "I guess we shouldn’t eat too much." },
  { role: "Narrator", text: "The elf waved her wand and a basket of colorful fruits appeared. \"Try these. They are sweet and healthy!\"" },
  { role: "Kelly", text: "Mmm! This is delicious too!" },
  { role: "Ryder", text: "Thank you! We will eat candy only sometimes." },
  { role: "Elf", text: "That’s a good choice!" },
  { role: "Narrator", text: "Before they left, she waved her hand. The candy house sparkled. The chocolate walls turned golden, and the gummy bear roof became a rainbow of lights." },
  { role: "Kelly", text: "Wow! Magic!" },
  { role: "Ollie", text: "This is the best day ever!" },
  { role: "Elf", text: "This house teaches us — enjoy sweets but also make healthy choices." },
  { role: "Narrator", text: "The children waved goodbye. As they walked away, they felt happy. They had learned an important lesson." },
  { role: "Ryder", text: "That was an amazing adventure!" },
  { role: "Kelly", text: "I wonder what we will find next!" },
  { role: "Narrator", text: "Just then, they heard a rustling sound behind a bush. A little squirrel appeared, holding a tiny golden key. The squirrel pointed to an old wooden chest under some leaves." },
  { role: "Ollie", text: "Should we open it?" },
  { role: "Kelly/Ryder", text: "Let’s do it!" },
  { role: "Narrator", text: "Inside, they found golden coins and a small note. It said, Kindness and wisdom will always lead to treasure." },
  { role: "Kelly", text: "We learned something important today." },
  { role: "Ollie", text: "Yes! Be kind, be wise, and make good choices." },
  { role: "Ryder", text: "And don’t eat too much candy!" },
  { role: "Narrator", text: "They put some of the coins in their pockets and decided to share the rest with their families. The squirrel chattered happily and scampered away." },
  { role: "Ollie", text: "Maybe next time, we’ll find a house made of ice cream!" },
  { role: "Kelly", text: "That would be fun, but we should ask before eating!" },
  { role: "Ryder", text: "And we should bring some healthy snacks too!" },
  { role: "Narrator", text: "They all laughed and continued their journey, excited for the magical surprises that awaited them." },
];

const colors: Record<string, string> = {
  Ollie: "purple",
  Kelly: "gold",
  Ryder: "blue",
  Elf: "green",
  "Kelly/Ryder": "orange",
  Narrator: "gray",
};

export function CandyHouseApp() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">The Candy House</h1>
      <div className="w-full max-w-2xl space-y-6">
        {script.map((line, index) => (
          <div key={index} className="p-4 border rounded-xl shadow-sm">
            <p
              className="text-2xl mb-2"
              style={{ color: colors[line.role] || "black" }}
            >
              {line.role}
            </p>
            <p className="text-lg italic">{line.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CandyHouseApp
