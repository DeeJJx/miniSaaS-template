import Link from "next/link";

export default function Slapjack() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">Slapjack Rules</div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Slapjack is to win all the cards by slapping the
            pile whenever a Jack is played.
          </p>

          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Slapjack is typically played with 2 to 8 players using a standard
              52-card deck.
            </li>
            <li>
              Each player is dealt an equal number of cards, which they place
              face down in front of them.
            </li>
            <li>
              Players take turns flipping the top card from their pile and
              placing it face up in the center.
            </li>
            <li>
              When a Jack is played, players race to slap the pile. The first
              player to slap the pile wins all the cards in it.
            </li>
            <li>
              If a player slaps the pile when there is no Jack, they must give
              one card from their pile to the player who played the last card.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">History</h2>
          <p className="mb-4">
            Slapjack is a popular children's card game that has been played for
            generations. Its simple rules and fast-paced nature make it an ideal
            game for social gatherings, helping players develop quick reflexes
            and hand-eye coordination.
          </p>

          <h2 className="card-title text-2xl font-bold">Variations</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Multiple Slap Cards**: Some variations allow players to slap
              other face cards (Queens, Kings) or specific cards like Aces.
            </li>
            <li>
              **Slapjack with Penalties**: Players who slap incorrectly can lose
              more than one card as a penalty, adding an extra layer of
              strategy.
            </li>
            <li>
              **Team Play**: In larger groups, players can form teams, working
              together to win cards.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Strategies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Be Observant**: Pay attention to the cards being played and be
              ready to react quickly when a Jack appears.
            </li>
            <li>
              **Practice Timing**: Slapping too early or too late can cause you
              to miss out on winning the pile.
            </li>
            <li>
              **Control Your Excitement**: Stay calm and composed to avoid
              slapping at the wrong time, especially with other face cards.
            </li>
          </ul>

          <h2 className="card-title text-2xl font-bold">Common Mistakes</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              **Slapping Non-Jacks**: Slapping when a non-Jack is played can
              cost you cards, so stay focused.
            </li>
            <li>
              **Rushing**: Trying to slap too quickly can lead to mistakes;
              timing is crucial.
            </li>
            <li>
              **Neglecting Your Cards**: Keep an eye on your own pile to avoid
              running out of cards too soon.
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
