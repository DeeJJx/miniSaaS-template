import Link from "next/link";

export default function Pyramid() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Pyramid Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Pyramid is to reveal cards from a pyramid structure
            and assign drinking penalties based on the value of those cards.
            Players aim to successfully remove cards from the pyramid while
            minimizing their drinks.
          </p>

          <h2 className="card-title text-2xl font-bold">Setup</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              A standard 52-card deck is used. Shuffle the deck and create a
              pyramid structure with cards face down.
            </li>
            <li>
              The pyramid consists of 7 rows, with the bottom row having 7 cards
              and each row above having one less card, forming a triangular
              shape.
            </li>
            <li>
              Players should sit in a circle around the pyramid for easy access.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Gameplay Overview</h2>
          <p className="mb-4">
            Players take turns revealing cards from the pyramid. When a card is
            revealed, all players must follow the card’s associated drinking
            rule. Players can attempt to remove cards from the pyramid, but they
            must drink if they reveal cards that have specific values associated
            with penalties.
          </p>

          <h2 className="card-title text-2xl font-bold">Winning the Game</h2>
          <p className="mb-4">
            There is no formal winner in Pyramid; the game is meant for fun and
            social interaction. Players can continue until all cards in the
            pyramid are revealed, and the game ends when the pyramid is fully
            cleared or players choose to stop.
          </p>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Pyramid is a drinking game that originated in the party culture of
            college students. The game is often played as a fun and social way
            to incorporate card games into drinking sessions. While its exact
            origins are unclear, it has gained popularity over the years due to
            its interactive nature and the ability to accommodate many players.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Drinking Rules:</strong> Players can customize drinking
              rules based on the card values, such as assigning different
              numbers of drinks for face cards or aces.
            </li>
            <li>
              <strong>Multiple Decks:</strong> Use multiple decks for larger
              groups, increasing the number of cards in the pyramid.
            </li>
            <li>
              <strong>Themed Versions:</strong> Incorporate specific themes,
              such as holiday themes or pop culture references, to add a twist
              to the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Card Memory:</strong> Pay attention to which cards have
              been revealed to better anticipate which cards may still be in the
              pyramid.
            </li>
            <li>
              <strong>Risk Management:</strong> Balance the risk of removing
              cards with the potential penalties to make strategic decisions.
            </li>
            <li>
              <strong>Team Play:</strong> Work together with other players to
              manage penalties and enhance the social aspect of the game.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Ignoring Rules:</strong> Failing to adhere to established
              drinking rules can disrupt gameplay and lead to confusion.
            </li>
            <li>
              <strong>Not Paying Attention:</strong> Being distracted during the
              game can cause players to miss important card reveals and
              associated penalties.
            </li>
            <li>
              <strong>Overindulging:</strong> Players should be mindful of their
              drinking to maintain a fun atmosphere without compromising safety.
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
  );
}
