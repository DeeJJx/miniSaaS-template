import Link from "next/link";
import Head from "next/head";

export default function Blackjack() {
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
        <div className="text-center text-4xl font-bold mb-8">
          Blackjack Rules and Strategies
        </div>

        <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Objective Section */}
            <h2 className="card-title text-2xl font-bold">Objective</h2>
            <p className="mb-4">
              The objective of Blackjack is to beat the dealer by having a hand
              value closest to 21 without exceeding it. Players are dealt two
              cards, and they must decide whether to take more cards (Hit) or
              stick with their current hand (Stand) while aiming to get as close
              to 21 as possible.
            </p>

            {/* Game History and Origins */}
            <h2 className="card-title text-2xl font-bold">
              History and Origins
            </h2>
            <p className="mb-4">
              Blackjack, also known as 21, is one of the most popular casino
              card games worldwide. Its origins can be traced back to a game
              called "Vingt-et-Un" (meaning 21 in French), which appeared in
              French casinos around the 1700s. The modern version of Blackjack
              became popular in the United States in the 1800s, especially after
              casinos started offering a 10-to-1 payout for a hand featuring an
              Ace of Spades and a Black Jack (hence the name "Blackjack"). Over
              time, Blackjack has evolved into a game enjoyed by both casual
              players and professional gamblers.
            </p>

            {/* Basic Rules */}
            <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Blackjack is played with one or more standard 52-card decks.
              </li>
              <li>
                Number cards are worth their face value, face cards (J, Q, K)
                are worth 10, and Aces can be worth 1 or 11.
              </li>
              <li>
                Players receive two cards, as does the dealer (one card face-up,
                one face-down).
              </li>
              <li>
                The player's goal is to beat the dealer by having a hand closer
                to 21 without going over (busting).
              </li>
            </ul>

            {/* Variations */}
            <h2 className="card-title text-2xl font-bold">
              Variations of Blackjack
            </h2>
            <p className="mb-4">
              While traditional Blackjack is the most common version, there are
              several popular variations played around the world:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Spanish 21:</strong> Played without 10-value cards, but
                players have more options like "Late Surrender" and bonuses for
                certain hands.
              </li>
              <li>
                <strong>Pontoon:</strong> A British variant where terms like
                "Twist" (Hit) and "Stick" (Stand) are used. The rules for how
                cards are revealed and split are also different.
              </li>
              <li>
                <strong>Double Exposure Blackjack:</strong> In this variation,
                both of the dealer’s cards are dealt face-up, but the house has
                advantages like winning ties except on natural 21.
              </li>
              <li>
                <strong>Blackjack Switch:</strong> Players are dealt two hands
                and can switch their top cards to improve their odds.
              </li>
            </ul>

            {/* Strategies and Tips */}
            <h2 className="card-title text-2xl font-bold">
              Strategies and Tips for Blackjack
            </h2>
            <p className="mb-4">
              Blackjack is a game of both luck and strategy. Using basic
              strategy can significantly improve your odds of winning. Here are
              some key tips to keep in mind:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Know When to Hit or Stand:</strong> If your hand totals
                12-16, and the dealer shows a weak card (2-6), it’s better to
                Stand. However, if the dealer shows a strong card (7 or higher),
                you may want to Hit to get closer to 21.
              </li>
              <li>
                <strong>Double Down on 11:</strong> When you have a hand of 11,
                doubling down is a strong play because there’s a good chance
                you’ll hit a 10 or face card, making your total 21.
              </li>
              <li>
                <strong>Split Aces and Eights:</strong> Always split Aces and
                8s. Splitting Aces gives you the chance to form two strong
                hands, and splitting 8s helps you avoid a hard 16, which is one
                of the worst hands in Blackjack.
              </li>
              <li>
                <strong>Never Split Tens:</strong> A hand of 20 is extremely
                strong, and splitting tens reduces your chances of winning.
              </li>
              <li>
                <strong>Avoid Insurance Bets:</strong> Insurance is generally
                not a good bet. It offers poor odds and should be avoided unless
                you’re counting cards.
              </li>
            </ul>

            {/* Common Mistakes */}
            <h2 className="card-title text-2xl font-bold">
              Common Mistakes to Avoid
            </h2>
            <p className="mb-4">
              Even experienced players make mistakes in Blackjack. Here are some
              of the most common mistakes and how to avoid them:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Not Using Basic Strategy:</strong> Many players rely on
                gut instinct rather than following basic strategy. Memorize the
                strategy chart for optimal decisions.
              </li>
              <li>
                <strong>Overbetting:</strong> Betting too much on a single hand
                can lead to losing your bankroll quickly. It’s important to
                manage your money and stick to a budget.
              </li>
              <li>
                <strong>Misunderstanding Soft Hands:</strong> Players often
                don't understand how to play "soft" hands (hands containing an
                Ace). Remember that a soft 18 is better played as a Hit rather
                than a Stand when the dealer has a strong upcard.
              </li>
              <li>
                <strong>Splitting Fives or Tens:</strong> Splitting fives is a
                common beginner mistake. Instead of splitting, use them as a
                strong hand to hit or double down. Similarly, splitting tens
                weakens a hand that would otherwise likely win.
              </li>
            </ul>

            {/* Winning and Losing */}
            <h2 className="card-title text-2xl font-bold">
              Winning and Losing in Blackjack
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>If your hand exceeds 21, you bust and lose automatically.</li>
              <li>If the dealer busts, and you haven’t, you win.</li>
              <li>If neither busts, the closest hand to 21 wins.</li>
              <li>
                If both you and the dealer have the same hand value, it’s a push
                (a tie), and your bet is returned.
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
