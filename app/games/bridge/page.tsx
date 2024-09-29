import Link from "next/link";
import Head from "next/head";

export default function Bridge() {
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Bridge",
    numberOfPlayers: "4",
    gameCategory: "Card Game",
    description:
      "Bridge is a classic card game played by 4 players in two partnerships. It involves bidding and trick-taking strategies to win the game.",
    url: "https://cardmaster.dev/games/bridge",
  };

  return (
    <>
      <Head>
        <title>Bridge - A Card Game for 4 Players</title>
        <meta
          name="description"
          content="Learn how to play Bridge, a strategic card game played by 4 players in two partnerships. Explore the rules and bidding strategies."
        />

        {/* Inject JSON-LD structured data into the head */}
        <script type="application/ld+json">{JSON.stringify(gameSchema)}</script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
        <div className="text-center text-4xl font-bold mb-8">
          Bridge Rules and Strategies
        </div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Objective Section */}
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Bridge is for partnerships to score points by
              winning tricks, with the ultimate goal of being the first to reach
              a specified number of points, typically 100 or more.
            </p>

            {/* Game History and Origins */}
            <h2 className="card-title text-2xl font-bold">
              History and Origins
            </h2>
            <p className="mb-4">
              Bridge is derived from the game of "Whist," which became popular
              in the 18th century in England. In the late 19th and early 20th
              centuries, new versions of the game, such as "Auction Bridge" and
              eventually "Contract Bridge," were developed. Contract Bridge, the
              modern version we know today, was codified in the 1920s by Harold
              Vanderbilt. Its popularity soared in the mid-20th century, leading
              to the establishment of national and international tournaments,
              making Bridge one of the most respected and skillful card games in
              the world.
            </p>

            {/* Basic Rules */}
            <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Bridge is played with four players in two partnerships. Players
                sit opposite their partners.
              </li>
              <li>
                A standard 52-card deck is used, and the game consists of a
                series of deals, each with a bidding phase and a play phase.
              </li>
              <li>
                The goal during the play phase is to win as many tricks as
                possible to fulfill the contract decided during the bidding
                phase.
              </li>
            </ul>

            {/* Bidding */}
            <h2 className="card-title text-2xl font-bold">Bidding</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                During the bidding phase, players declare the number of tricks
                their partnership will attempt to win and the suit that will be
                the trump suit (or declare no trump).
              </li>
              <li>
                The highest bid becomes the contract, which the partnership must
                fulfill by winning at least the number of tricks they bid.
              </li>
              <li>
                Bidding proceeds clockwise, and players may pass if they do not
                wish to bid.
              </li>
            </ul>

            {/* Gameplay */}
            <h2 className="card-title text-2xl font-bold">Gameplay</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                The player to the left of the declarer (the one who won the
                contract) leads the first trick.
              </li>
              <li>
                Players must follow suit if possible; if not, they may play any
                card.
              </li>
              <li>
                The highest card in the led suit wins the trick unless a trump
                card is played, in which case the highest trump wins.
              </li>
              <li>
                The partnership that wins the contract must try to win the
                number of tricks they bid, while the opposing partnership tries
                to prevent them from doing so.
              </li>
            </ul>

            {/* Variations */}
            <h2 className="card-title text-2xl font-bold">
              Variations of Bridge
            </h2>
            <p className="mb-4">
              Bridge has several variations, each with its own unique rules and
              style of play. Some of the most popular variations include:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Duplicate Bridge:</strong> This version is commonly
                played in tournaments. The same deal is played by multiple
                tables, and the objective is to score better than other
                partnerships playing the same hands.
              </li>
              <li>
                <strong>Chicago (Four-Deal Bridge):</strong> In this variation,
                the game consists of four deals, with partnerships rotating
                after each round.
              </li>
              <li>
                <strong>Rubber Bridge:</strong> A more casual version played for
                fun or small stakes. It is played in "rubbers," with the first
                partnership to win two games declared the winner.
              </li>
            </ul>

            {/* Strategies and Tips */}
            <h2 className="card-title text-2xl font-bold">
              Strategies and Tips for Bridge
            </h2>
            <p className="mb-4">
              Bridge is a game of skill and communication between partners. To
              improve your play, here are some key strategies:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Know the Bidding System:</strong> Understand the bidding
                conventions your partnership is using. Proper communication
                through bidding is essential to success in Bridge.
              </li>
              <li>
                <strong>Focus on High-Card Points (HCP):</strong> When bidding,
                assess your hand’s strength using high-card points (A=4, K=3,
                Q=2, J=1). Typically, 12 or more points are needed to open a
                bid.
              </li>
              <li>
                <strong>Play to Your Partner’s Strengths:</strong> Keep track of
                the cards your partner plays and adjust your strategy
                accordingly. Trust your partner’s bidding and play accordingly.
              </li>
              <li>
                <strong>Practice Declarer Play:</strong> As the declarer, plan
                out your play carefully. Try to visualize your opponent’s hands
                and use your trump suit wisely.
              </li>
              <li>
                <strong>Defensive Play is Key:</strong> When playing defense,
                focus on communicating with your partner through the cards you
                play. For example, leading with a high card can signal strength
                in that suit.
              </li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="card-title text-2xl font-bold">
              Common Mistakes to Avoid
            </h2>
            <p className="mb-4">
              Here are some common errors that players make and how to avoid
              them:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Overbidding:</strong> Many players get carried away and
                bid too high, overestimating their hand strength. Stick to the
                bidding conventions and trust the points system.
              </li>
              <li>
                <strong>Ignoring Your Partner’s Signals:</strong> Bridge is a
                partnership game. Ignoring your partner’s bids or play signals
                can cost you valuable tricks.
              </li>
              <li>
                <strong>Not Planning Ahead:</strong> As declarer, failing to
                plan your strategy based on the opening lead and your own hand
                is a common mistake. Always think a few tricks ahead.
              </li>
              <li>
                <strong>Undervaluing the Trump Suit:</strong> Players often
                neglect the power of the trump suit. Remember, the trump suit
                can turn weak cards into trick-winners.
              </li>
            </ul>

            {/* Scoring */}
            <h2 className="card-title text-2xl font-bold">Scoring</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                If the declaring partnership wins the number of tricks they bid,
                they score points. If they fail, the opposing partnership scores
                points.
              </li>
              <li>
                The value of each trick varies depending on whether the contract
                is in a suit or no trump.
              </li>
              <li>
                Bonus points are awarded for fulfilling contracts, making
                overtricks, and achieving specific conditions like slams.
              </li>
            </ul>

            {/* Back to Home Button */}
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
