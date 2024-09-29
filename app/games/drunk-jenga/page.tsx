import Link from "next/link";
import Head from "next/head";

export default function DrunkJenga() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Drunk Jenga",
    numberOfPlayers: "2+",
    gameCategory: "Party Game",
    description:
      "Drunk Jenga is a fun party game for 2 or more players. It combines the classic block-stacking game Jenga with drinking rules for a hilarious and challenging experience.",
    url: "https://cardmaster.dev/games/drunk-jenga",
  };
  return (
    <>
      <Head>
        <title>Drunk Jenga - A Fun Party Game for 2+ Players</title>
        <meta
          name="description"
          content="Learn how to play Drunk Jenga, a fun party game for 2 or more players. Read the rules, variations, and strategies for this drinking twist on the classic Jenga game."
        />

        {/* Inject JSON-LD structured data into the head */}
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
        <div className="text-center text-4xl font-bold mb-8">
          Drunk Jenga Rules
        </div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Drunk Jenga is to successfully remove blocks from
              a tower without causing it to collapse while following the
              drinking rules on each block.
            </p>

            <h2 className="card-title text-2xl font-bold">Setup</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                A standard Jenga set is used, and the blocks are stacked in the
                traditional Jenga formation (three blocks per layer, alternating
                the direction of each layer).
              </li>
              <li>
                Before the game starts, players write different drinking
                challenges or rules on each block (e.g., "Take 2 drinks,"
                "Choose someone to drink," "Sing a song").
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
            <p className="mb-4">
              Players take turns removing one block from the tower and must
              follow the drinking rule written on the block they pull. The game
              continues until the tower collapses.
            </p>

            <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
            <p className="mb-4">
              There is no formal winner in Drunk Jenga; the game ends when the
              tower collapses. The player who causes the tower to fall must
              finish their drink or complete a specific challenge decided by the
              group.
            </p>

            <h2 className="card-title text-2xl font-bold">History</h2>
            <p className="mb-4">
              Drunk Jenga is a variation of the classic Jenga game, which was
              invented by Leslie Scott in the late 1970s. The drinking version
              likely emerged in the early 2000s, combining the traditional
              stacking game with social drinking rules. It has since become
              popular at parties and gatherings as a fun way to engage players
              and encourage interaction while drinking.
            </p>

            <h2 className="card-title text-2xl font-bold">Variations</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Timed Turns:</strong> Each player has a limited time
                (e.g., 30 seconds) to make their move, adding pressure to the
                game.
              </li>
              <li>
                <strong>Theme Blocks:</strong> Players can designate blocks with
                specific themes (e.g., pop culture references, challenges
                related to specific drinks).
              </li>
              <li>
                <strong>Multi-Layer Challenges:</strong> Create different rules
                for different layers of the tower, making each level
                progressively harder or more fun.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Strategies</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Choose Wisely:</strong> When removing a block, look for
                ones that seem less stable to avoid toppling the tower.
              </li>
              <li>
                <strong>Stabilize the Tower:</strong> After removing a block,
                take a moment to stabilize the tower before placing your block
                on top.
              </li>
              <li>
                <strong>Engage the Group:</strong> Use challenges or questions
                that involve other players to keep the atmosphere light and fun.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Not Reading the Rules:</strong> Failing to understand
                the drinking rules on the blocks can lead to confusion and
                unintentional penalties.
              </li>
              <li>
                <strong>Overthinking Moves:</strong> Spending too much time
                deliberating can lead to increased pressure and mistakes.
              </li>
              <li>
                <strong>Neglecting Stability:</strong> Pulling blocks too
                aggressively can cause the tower to collapse; always prioritize
                balance.
              </li>
            </ul>

            <div className="card-actions justify-center">
              <Link href="/">
                <button className="btn btn-primary">Back to Home</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
