import { useRef, useState, useEffect } from "react";

interface ScriptLine {
  role: string;
  text: string;
}

const script: ScriptLine[] = [
  { role: "開場", text: "Hello everyone! My name is Ollie. My name is Kelly. My name is Ryder. Today, we are going to tell you a story about an adventure! The candy House!" },
  { role: "旁白-Ollie", text: "Once upon a time, three best friends, Kelly, Ollie, and Ryder, went on an adventure in the forest. They loved playing and finding new things. One sunny afternoon, they followed a path of colorful flowers. Suddenly, they saw something amazing — a house made of candy!" },
  { role: "Kelly", text: "Is that a candy house?" },
  { role: "Ollie", text: "It looks delicious! Let’s go closer!" },
  { role: "Ryder", text: "Wow! It smells like chocolate and cotton candy!" },
  { role: "旁白-Kelly", text: "The house had chocolate walls, a gummy bear roof, and jelly windows. The door was made of a big cookie. The friends couldn’t believe their eyes." },
  { role: "Ollie", text: "I would like to eat the chocolate wall!" },
  { role: "Ryder", text: "The cookie door opened by itself. Let’s go inside!" },
  { role: "旁白-Ryder", text: "Inside, everything was even sweeter. The chairs were made of marshmallows, the tables were cookies, and the floor was caramel." },
  { role: "Kelly", text: "This is so soft and yummy!" },
  { role: "Ollie", text: "I love this place!" },
  { role: "Elf-Kelly", text: "Who is eating my house?" },
  { role: "旁白-Ollie", text: "A tiny elf flew in! She had sparkly wings, a shiny green hat, and carried a little wand." },
  { role: "Kelly", text: "I’m sorry, ma’am. Your house looks so tasty. We just took a little bite." },
  { role: "Elf-Ollie", text: "I understand, my dear children. But too much candy is not good. It can hurt your teeth and make you sick." },
  { role: "Ryder", text: "Oh no… I didn’t think about that." },
  { role: "Ollie", text: "I guess we shouldn’t eat too much." },
  { role: "旁白-Kelly", text: "The elf waved her wand and a basket of colorful fruits appeared. \"Try these. They are sweet and healthy!\"" },
  { role: "Kelly", text: "Mmm! This is delicious too!" },
  { role: "Ryder", text: "Thank you! We will eat candy only sometimes." },
  { role: "Elf-Kelly", text: "That’s a good choice!" },
  { role: "旁白-Ryder", text: "Before they left, she waved her hand. The candy house sparkled. The chocolate walls turned golden, and the gummy bear roof became a rainbow of lights." },
  { role: "Kelly", text: "Wow! Magic!" },
  { role: "Ollie", text: "This is the best day ever!" },
  { role: "Elf-Kelly", text: "This house teaches us — enjoy sweets but also make healthy choices." },
  { role: "旁白-Ollie", text: "The children waved goodbye. As they walked away, they felt happy. They had learned an important lesson." },
  { role: "Ryder", text: "That was an amazing adventure!" },
  { role: "Kelly", text: "I wonder what we will find next!" },
  { role: "旁白-Kelly", text: "Just then, they heard a rustling sound behind a bush. A little squirrel appeared, holding a tiny golden key. The squirrel pointed to an old wooden chest under some leaves." },
  { role: "Ollie", text: "Should we open it?" },
  { role: "Kelly/Ryder", text: "Let’s do it!" },
  { role: "旁白-Ryder", text: "Inside, they found golden coins and a small note. It said, Kindness and wisdom will always lead to treasure." },
  { role: "Kelly", text: "We learned something important today." },
  { role: "Ollie", text: "Yes! Be kind, be wise, and make good choices." },
  { role: "Ryder", text: "And don’t eat too much candy!" },
  { role: "旁白-Ollie", text: "They put some of the coins in their pockets and decided to share the rest with their families. The squirrel chattered happily and scampered away." },
  { role: "Ollie", text: "Maybe next time, we’ll find a house made of ice cream!" },
  { role: "Kelly", text: "That would be fun, but we should ask before eating!" },
  { role: "Ryder", text: "And we should bring some healthy snacks too!" },
  { role: "旁白-Kelly", text: "They all laughed and continued their journey, excited for the magical surprises that awaited them." },
];

const colors: Record<string, string> = {
  Ollie: "#a855f7",        // 紫色
  "旁白-Ollie": "#a855f7", // 紫色
  Kelly: "#facc15",        // 黃色
  "旁白-Kelly": "#facc15",  // 黃色
  Ryder: "#3b82f6",        // 藍色
  "旁白-Ryder": "#3b82f6",  // 藍色
  "Elf-Ollie": "#ef4444",   // 紅色
  "Elf-Kelly": "#ef4444",   // 紅色
  "Kelly/Ryder": "#fb923c", // 橘色
  "開場": "#10b981",         // 青綠色
};

export default function CandyHouseApp() {
  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const [showTopButton, setShowTopButton] = useState(false);

  const setAudioRef = (index: number) => (el: HTMLAudioElement | null) => {
    if (el) {
      audioRefs.current[index] = el;
    }
  };

  const playAudio = (index: number) => {
    audioRefs.current[index]?.play();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2;
      setShowTopButton(window.scrollY > halfScreen);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-100 dark:from-gray-300 dark:to-gray-400 p-4 flex flex-col items-center relative">
      <h1 className="text-4xl font-bold mb-8 text-gray-500 dark:text-white-300 drop-shadow-md text-center">The Candy House</h1>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl space-y-6 px-4">
          {script.map((line, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg flex flex-col md:flex-row items-start md:items-center md:justify-start hover:scale-105 transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full">
                <p
                  className="text-xl md:text-2xl font-semibold mb-2 md:mb-0"
                  style={{ color: colors[line.role] || "black" }}
                >
                  {line.role}
                </p>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 flex-1">{line.text}</p>
                <button
                  className="mt-2 md:mt-0 px-4 py-2 bg-gray-100 dark:bg-pink-100 text-white rounded-lg hover:bg-pink-200 dark:hover:bg-pink-200"
                  onClick={() => playAudio(index)}
                >
                  ▶️
                </button>
                <audio
                  ref={setAudioRef(index)}
                  src={`/assets/audio/${index + 1}.aac`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-pink-100 hover:bg-pink-200 dark:hover:bg-pink-200 text-white shadow-lg"
        >
          🔝
        </button>
      )}
    </div>
  );
}
