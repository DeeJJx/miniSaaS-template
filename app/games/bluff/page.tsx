import Link from "next/link";
import Head from "next/head";

export default function Bluff() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Blackjack",
    numberOfPlayers: "1-8",
    gameCategory: "Card Game",
    description:
      "Blackjack, also known as 21, is a popular card game where players try to beat the dealer by getting a hand value as close to 21 as possible without exceeding it.",
    url: "https://cardmaster.dev/games/blackjack",
  };

  return (
    <>
      <Head>
        <title>Blackjack - A Card Game for 1-8 Players</title>
        <meta
          name="description"
          content="Learn how to play Blackjack, a popular card game where the goal is to get as close to 21 as possible without going over. Read the rules and strategies."
        />

        {/* Inject JSON-LD structured data into the head */}
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
        <div className="text-center text-4xl font-bold mb-8">Bluff Rules</div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Bluff is to get rid of all your cards while
              trying to deceive your opponents about the cards you play.
            </p>

            <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Bluff can be played with 3 or more players using a standard
                52-card deck.
              </li>
              <li>
                Each player is dealt an equal number of cards, and the remaining
                cards form a draw pile.
              </li>
              <li>
                Players take turns playing cards face down on the pile while
                announcing the rank they claim to be playing.
              </li>
              <li>
                Players can bluff about the rank of the cards they are playing;
                if another player suspects a bluff, they can challenge it.
              </li>
              <li>
                If the challenge is successful (the player was lying), the
                bluffer picks up the pile. If the challenge fails (the player
                was truthful), the challenger must pick up the pile.
              </li>
              <li>The game continues until a player has no cards left.</li>
            </ul>

            <h2 className="card-title text-2xl font-bold">History</h2>
            <p className="mb-4">
              Bluff has various origins, often attributed to traditional games
              like Liar and Cheat. The game emphasizes deception and strategy,
              and it has gained popularity in casual settings for its fun and
              social interaction.
            </p>

            <h2 className="card-title text-2xl font-bold">Variations</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                **Multiple Decks**: In larger groups, multiple decks can be used
                to keep the game flowing.
              </li>
              <li>
                **Different Ranks**: Players can choose specific ranks to play,
                altering the strategic element.
              </li>
              <li>
                **Challenge Limits**: Some variations limit the number of times
                a player can challenge a bluff in a round.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Strategies</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                **Observe Patterns**: Pay attention to other players' behaviors
                and card-playing patterns to predict their bluffs.
              </li>
              <li>
                **Balance Bluffing and Honesty**: Mix up your strategies by
                bluffing and telling the truth to keep opponents guessing.
              </li>
              <li>
                **Challenge Wisely**: Be cautious when challenging bluffs; only
                challenge when you have a strong suspicion.
              </li>
            </ul>

            <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                **Bluffing Too Often**: Overusing bluffs can make you
                predictable and lead to losing more cards.
              </li>
              <li>
                **Not Paying Attention**: Failing to notice patterns can result
                in missed opportunities to challenge bluffs.
              </li>
              <li>
                **Challenging Too Quickly**: Jumping to challenge without
                sufficient evidence can backfire and lead to picking up the
                pile.
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
