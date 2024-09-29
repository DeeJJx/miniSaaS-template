import Link from "next/link";

export default function GoFish() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Go Fish Rules and Strategies
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Go Fish is to collect as many sets of four cards of
            the same rank as possible by asking other players for specific
            cards.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Go Fish has a long history and is believed to have originated in the
            19th century. While the exact origins are unclear, it is thought to
            be derived from various fishing games that were popular in Europe.
            The game was traditionally played with a standard deck of playing
            cards and has since evolved into a family-friendly game enjoyed by
            players of all ages. Its simple rules and interactive gameplay make
            it a staple in many households and social gatherings.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Go Fish is typically played with 2-6 players using a standard
              52-card deck.
            </li>
            <li>
              Each player is dealt 5 cards (or 7 cards if there are only 2
              players), and the remaining cards form a draw pile in the center.
            </li>
            <li>
              The game proceeds with players asking others for specific cards to
              form sets of four.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              On their turn, a player asks another player for a specific rank of
              card that they already have at least one of in their hand (e.g.,
              "Do you have any threes?").
            </li>
            <li>
              If the player asked has any cards of the requested rank, they must
              give them all to the asking player.
            </li>
            <li>
              If the player asked has no cards of the requested rank, they say
              "Go Fish," and the asking player must draw a card from the draw
              pile.
            </li>
            <li>
              If the drawn card is the rank they asked for, they show it and get
              another turn; if not, their turn ends.
            </li>
            <li>
              When a player collects a set of four cards of the same rank, they
              place the set face-up in front of them.
            </li>
          </ul>

          {/* Variations of Go Fish */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Go Fish
          </h2>
          <p className="mb-4">
            Go Fish has several fun variations that can change gameplay
            dynamics:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Go Fish with Wild Cards:</strong> Some variations allow
              players to use wild cards (like Jokers) that can represent any
              rank.
            </li>
            <li>
              <strong>Shark Fish:</strong> In this version, players can ask for
              two cards at once if they have one card of the rank, adding a
              layer of strategy.
            </li>
            <li>
              <strong>Timed Go Fish:</strong> Players have a set time limit for
              their turns, speeding up gameplay and increasing excitement.
            </li>
          </ul>

          {/* Winning the Game */}
          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game continues until all sets of four have been collected, or
              the draw pile is empty.
            </li>
            <li>
              The player with the most sets at the end of the game is declared
              the winner.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Go Fish
          </h2>
          <p className="mb-4">
            Here are some strategies to enhance your Go Fish gameplay:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Pay Attention to Others:</strong> Keep track of what cards
              other players ask for and whether they successfully get them,
              which can give you hints about their hand.
            </li>
            <li>
              <strong>Ask for Ranks Wisely:</strong> Don’t just ask for cards
              randomly; try to ask for ranks that you think other players might
              have based on previous turns.
            </li>
            <li>
              <strong>Keep Your Hand Organized:</strong> Organizing your cards
              by rank can help you quickly identify which cards to ask for next
              and remember what you already have.
            </li>
          </ul>

          {/* Common Mistakes */}
          <h2 className="card-title text-2xl font-bold">
            Common Mistakes to Avoid
          </h2>
          <p className="mb-4">
            Here are some mistakes that players often make:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Forgetting What Cards Were Asked For:</strong> Not paying
              attention to what other players are asking can lead to missed
              opportunities.
            </li>
            <li>
              <strong>Asking for Ranks You Don’t Have:</strong> Only ask for
              ranks you have at least one card of; otherwise, you’ll risk not
              being able to ask again.
            </li>
            <li>
              <strong>Not Drawing Cards When Needed:</strong> If you don’t get
              the card you asked for, always remember to draw from the pile; it
              might lead to new opportunities.
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
  );
}
