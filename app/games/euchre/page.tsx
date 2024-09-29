import Link from "next/link";

export default function Euchre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 bg-base-200">
      <div className="text-center text-4xl font-bold mb-8">
        Euchre Rules and Strategies
      </div>

      <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Objective Section */}
          <h2 className="card-title text-2xl font-bold">Objective</h2>
          <p className="mb-4">
            The objective of Euchre is to be the first team to score 10 points
            by winning tricks and fulfilling contracts during the play.
          </p>

          {/* Game History and Origins */}
          <h2 className="card-title text-2xl font-bold">History and Origins</h2>
          <p className="mb-4">
            Euchre is believed to have originated from a 19th-century card game
            called Jucker, popular among the German-speaking settlers in North
            America. Over time, the game spread across the Midwest and Northeast
            U.S., evolving into its modern form. It became especially popular in
            the Great Lakes region, where it’s often still played in social
            gatherings and tournaments. The use of a smaller deck and emphasis
            on teamwork and strategy set Euchre apart from other trick-taking
            games like Bridge or Hearts.
          </p>

          {/* Basic Rules */}
          <h2 className="card-title text-2xl font-bold">Basic Rules</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Euchre is typically played with four players divided into two
              partnerships, using a deck of 24, 28, or 32 cards (9s through
              Aces).
            </li>
            <li>
              The game revolves around winning tricks, and the trump suit plays
              a crucial role in determining the winner of each trick.
            </li>
            <li>
              The dealer deals five cards to each player, leaving four cards as
              the "kitty," with the top card turned face up to determine the
              initial trump suit.
            </li>
          </ul>

          {/* Bidding and Trump */}
          <h2 className="card-title text-2xl font-bold">Bidding and Trump</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Players have the option to accept or pass the turned-up card as
              trump. If accepted, the dealer picks up the card and discards a
              different card.
            </li>
            <li>
              If all players pass, a second round of bidding occurs, allowing
              players to declare a different suit as trump.
            </li>
            <li>
              The team that declares trump must win at least three tricks to
              fulfill their contract.
            </li>
          </ul>

          {/* Variations of Euchre */}
          <h2 className="card-title text-2xl font-bold">
            Variations of Euchre
          </h2>
          <p className="mb-4">
            Euchre has several variations based on regional differences and
            house rules:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Stick the Dealer:</strong> In this variation, if all
              players pass twice, the dealer is forced to pick trump.
            </li>
            <li>
              <strong>Loner Hands:</strong> If a player feels confident, they
              can declare a "loner," playing alone without their partner for
              extra points if successful.
            </li>
            <li>
              <strong>No Trump Bid:</strong> Some variants allow players to call
              "no trump," where no suit is trump, adding an extra challenge.
            </li>
          </ul>

          {/* Gameplay */}
          <h2 className="card-title text-2xl font-bold">Gameplay</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              The player to the left of the dealer leads the first trick, and
              play proceeds clockwise.
            </li>
            <li>
              Players must follow suit if possible; if not, they may play any
              card.
            </li>
            <li>
              The highest card of the led suit wins the trick, unless a trump
              card is played, in which case the highest trump wins.
            </li>
            <li>
              The team that wins the majority of the tricks scores points based
              on the number of tricks won.
            </li>
          </ul>

          {/* Strategies and Tips */}
          <h2 className="card-title text-2xl font-bold">
            Strategies and Tips for Euchre
          </h2>
          <p className="mb-4">
            Euchre is a game of strategy and teamwork, and these tips can help
            improve your chances of winning:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Call Trump Wisely:</strong> It’s tempting to pick trump
              early, but only call it when you have a strong hand. Otherwise,
              you risk being euchred.
            </li>
            <li>
              <strong>Pay Attention to the Left Bower:</strong> The Jack of the
              same color as the trump suit (known as the left bower) is the
              second strongest card, so keep track of where it is.
            </li>
            <li>
              <strong>Play Aggressively on Defense:</strong> If you’re on
              defense, play high cards early to prevent the declaring team from
              winning tricks.
            </li>
            <li>
              <strong>Communicate with Your Partner:</strong> Since verbal
              communication isn’t allowed, your plays can signal to your partner
              what cards you have or don’t have, helping coordinate your
              strategy.
            </li>
          </ul>

          {/* Common Mistakes */}
          <h2 className="card-title text-2xl font-bold">
            Common Mistakes to Avoid
          </h2>
          <p className="mb-4">Here are some mistakes to avoid in Euchre:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Calling Trump Without Support:</strong> Be cautious when
              calling trump if you don’t have strong supporting cards, or you
              may risk being euchred.
            </li>
            <li>
              <strong>Underestimating the Left Bower:</strong> Failing to track
              the left bower’s location can cost you a trick, especially in
              tight situations.
            </li>
            <li>
              <strong>Playing Too Passively:</strong> While patience can be a
              virtue, Euchre rewards decisive play. Don’t hesitate to lead
              strong cards when needed.
            </li>
          </ul>

          {/* Scoring */}
          <h2 className="card-title text-2xl font-bold">Scoring</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              If the team that called trump wins three or four tricks, they
              score 1 point; if they win all five tricks, they score 2 points.
            </li>
            <li>
              If the opposing team (the defenders) wins three or more tricks,
              they score 2 points, and the declarer's team is "euchred."
            </li>
            <li>
              The game continues until one team reaches 10 points, winning the
              game.
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
