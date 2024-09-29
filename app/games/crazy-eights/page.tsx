import Link from "next/link";

export default function CrazyEights() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Crazy Eights Rules and Strategies
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Crazy Eights is to be the first player to get rid
            of all your cards by playing them to a central discard pile,
            following suit or rank, or playing an eight to change the suit.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Crazy Eights originated from a game called "Eights," which dates
            back to the 1930s and was a favorite during the Great Depression.
            The game gained popularity because it was simple to learn and didn't
            require any special equipment beyond a standard deck of cards. Its
            name comes from the fact that eights are wild, giving players a
            powerful move that can turn the tide of the game. Over time, various
            regional versions and house rules have evolved, making Crazy Eights
            a versatile and globally beloved card game.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Crazy Eights is typically played with 2-7 players using a standard
              52-card deck.
            </li>
            <li>
              The game begins with each player being dealt 5 cards (or 7 if
              there are only 2 players), and the remaining cards form a draw
              pile.
            </li>
            <li>
              The top card of the draw pile is turned face up to start the
              discard pile.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              On their turn, players must play a card that matches the rank or
              suit of the top card on the discard pile.
            </li>
            <li>
              If a player cannot match the rank or suit, they must draw cards
              from the draw pile until they can play.
            </li>
            <li>
              Eights are wild and can be played at any time, allowing the player
              to declare the next suit to be played.
            </li>
          </ul>

          {/* Variations of Crazy Eights */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Crazy Eights
          </h2>
          <p className="mb-4">
            Crazy Eights has numerous variations, with special cards and house
            rules often introduced to make the game more exciting:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Crazy Jacks:</strong> In this variation, Jacks become wild
              cards as well, adding a twist to the game.
            </li>
            <li>
              <strong>Draw Twos and Draw Fours:</strong> Some house rules
              include cards like twos or fours that make the next player draw
              extra cards unless they can play their own Draw card.
            </li>
            <li>
              <strong>Skip:</strong> Certain cards (like a Queen or a Jack) can
              cause the next player to lose their turn.
            </li>
            <li>
              <strong>Reverse:</strong> Similar to Uno, some versions of Crazy
              Eights include a rule where a certain card (like a King) reverses
              the direction of play.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Crazy Eights
          </h2>
          <p className="mb-4">
            While Crazy Eights is primarily a game of luck, a few strategic tips
            can help increase your chances of winning:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Hold on to Your Eights:</strong> Since eights are wild
              cards, it's often best to save them for moments when you have no
              other playable cards or when you want to disrupt an opponent’s
              strategy.
            </li>
            <li>
              <strong>Watch the Discard Pile:</strong> Pay attention to the
              cards that have been played. This will help you predict what cards
              are left and what suits might be more difficult for your
              opponents.
            </li>
            <li>
              <strong>Avoid Drawing if Possible:</strong> Try to match suits and
              ranks early on to avoid having to draw cards. The more cards you
              have, the harder it will be to win.
            </li>
            <li>
              <strong>Control the Suit:</strong> When possible, try to change
              the suit to one where you hold a strong hand or to a suit your
              opponent might not have.
            </li>
          </ul>

          {/* Common Mistakes */}
          <h2 className="card-title text-2xl font-bold">
            Common Mistakes to Avoid
          </h2>
          <p className="mb-4">
            Here are some common mistakes that can make it harder to win at
            Crazy Eights:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Playing Eights Too Early:</strong> While it may be
              tempting to play an eight as soon as you have one, using them too
              early can leave you vulnerable later in the game.
            </li>
            <li>
              <strong>Not Changing the Suit:</strong> Failing to change the suit
              when you play an eight can give your opponents an advantage.
              Always choose a suit that benefits your hand or disrupts your
              opponents’ strategies.
            </li>
            <li>
              <strong>Drawing Without Planning:</strong> Drawing cards without
              trying to manage your hand can quickly result in too many cards,
              making it hard to catch up.
            </li>
          </ul>

          {/* Special Cards */}
          <h2 className="card-title text-2xl font-bold">Special Cards</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Eights:</strong> When a player plays an eight, they get to
              choose the next suit to be played. The next player must play a
              card of the chosen suit or another eight.
            </li>
            <li>
              <strong>Draw Two:</strong> Some variations include a rule where a
              player who cannot play a card and has to draw must draw two cards
              instead of one.
            </li>
            <li>
              <strong>Skip:</strong> Some variations include a rule where
              certain cards (like a Jack or a Queen) cause the next player to
              lose their turn.
            </li>
          </ul>

          {/* Winning the Game */}
          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The game continues until one player has no cards left in their
              hand, at which point they are declared the winner of that round.
            </li>
            <li>
              The game can be played over multiple rounds, with players
              accumulating points based on the cards left in their opponents'
              hands.
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
