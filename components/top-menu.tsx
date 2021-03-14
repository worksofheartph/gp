import Link from 'next/link';
import { useState } from 'react';

export default function TopMenu() {
  const [toggled, setToggled] = useState(false);
  const toggleMenu = () => setToggled(!toggled);
  return (
    <>
      <nav className="menu" data-toggled={toggled} onClick={toggleMenu}>
        <div className="menu-square">
          <div className="bg-teal">Galing Mindanao</div>
        </div>
        <div className="menu-square">
          <div className="bg-cream fg-navy">
            <p className="issue-overview">
              For our second issue, we’re travelling further down south of the
              Philippines where a design community has found its footing—in
              Davao, most famous for its durian and breathtaking views from the
              highest mountain peak in the country; in Cagayan de Oro, the
              country’s adventure capital and City of Golden Friendship. We
              talked to three groups of creatives who are putting Mindanao on
              the map: Uncurated Studio’s type-driven branding projects, The
              Story Machine’s deeply personal illustration work, and Megan
              Palero’s one-of-a-kind motion design.
            </p>
          </div>
        </div>
        <div className="menu-square">
          <Link href="/issue-2-galing-mindanao/uncurated-studio">
            <a className="article bg-magenta">Uncurated Studio</a>
          </Link>
        </div>
        <div className="menu-square">
          <a className="article bg-green" href="#">
            The Story Machine
          </a>
        </div>
        <div className="menu-square">
          <a className="article bg-blue" href="#">
            Megan Palero
          </a>
        </div>
        <div className="menu-square">
          <a className="bg-navy" href="#">
            Instagram
          </a>
        </div>
        <div className="menu-square">
          <div className="bg-baby-blue"></div>
        </div>
      </nav>
      <a
        href="#"
        className="menu-toggle"
        onClick={toggleMenu}
        data-toggled={toggled}
      >
        <div className="issue-no">
          <span>2</span>
        </div>
        <div>Galing Mindanao</div>
      </a>
      <style jsx>{`
        .menu {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: grid;
          grid-template-columns: 4fr 2fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 2fr 4fr;
          overflow: hidden;
          pointer-events: none;
          color: var(--cream);
          isolation: isolate;
        }

        .menu-square {
          display: flex;
          justify-content: stretch;
          align-items: stretch;
          overflow: hidden;
        }

        .menu-square > * {
          --swipe-duration: 100ms;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: all;
        }

        .menu-square:nth-child(odd) > * {
          transition: transform var(--swipe-duration) ease-out;
          transform: translateX(101%);
        }
        .menu[data-toggled='true'] > .menu-square:nth-child(odd) > * {
          transform: translateX(0);
        }
        .menu-square:nth-child(even) > * {
          transition: transform var(--swipe-duration) ease-out;
          transform: translateY(-101%);
        }
        .menu[data-toggled='true'] > .menu-square:nth-child(even) > * {
          transform: translateY(0);
        }

        .menu-square:nth-child(1) {
          z-index: 1;
          grid-area: 1 / 1 / 5 / 2;
        }
        .menu-square:nth-child(2) {
          z-index: 2;
          grid-area: 4 / 2 / 5 / 5;
        }
        .menu-square:nth-child(3) {
          z-index: 3;
          grid-area: 1 / 2 / 4 / 3;
        }
        .menu-square:nth-child(4) {
          z-index: 4;
          grid-area: 3 / 3 / 4 / 5;
        }
        .menu-square:nth-child(5) {
          z-index: 5;
          grid-area: 1 / 3 / 3 / 4;
        }
        .menu-square:nth-child(6) {
          z-index: 6;
          grid-area: 2 / 4 / 3 / 5;
        }
        .menu-square:nth-child(7) {
          z-index: 7;
          grid-area: 1 / 4 / 2 / 5;
        }

        .menu-square:nth-child(1) > * {
          transition-delay: calc(6 * var(--swipe-duration));
        }
        .menu-square:nth-child(2) > * {
          transition-delay: calc(5 * var(--swipe-duration));
        }
        .menu-square:nth-child(3) > * {
          transition-delay: calc(4 * var(--swipe-duration));
        }
        .menu-square:nth-child(4) > * {
          transition-delay: calc(3 * var(--swipe-duration));
        }
        .menu-square:nth-child(5) > * {
          transition-delay: calc(2 * var(--swipe-duration));
        }
        .menu-square:nth-child(6) > * {
          transition-delay: calc(1 * var(--swipe-duration));
        }
        .menu-square:nth-child(7) > * {
          transition-delay: calc(0 * var(--swipe-duration));
        }

        .menu[data-toggled='false'] > .menu-square:nth-child(1) > * {
          transition-delay: calc(0 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(2) > * {
          transition-delay: calc(1 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(3) > * {
          transition-delay: calc(2 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(4) > * {
          transition-delay: calc(3 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(5) > * {
          transition-delay: calc(4 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(6) > * {
          transition-delay: calc(5 * var(--swipe-duration));
        }
        .menu[data-toggled='false'] > .menu-square:nth-child(7) > * {
          transition-delay: calc(6 * var(--swipe-duration));
        }

        .menu-toggle {
          position: absolute;
          top: 6.25vh;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: var(--teal);
          font-size: 80%;
          padding-right: calc(2% - 0.5em);
        }

        .issue-no {
          position: relative;
          width: 1.2em;
          height: 1.2em;
          text-align: center;
          line-height: 1.2em;
          transform: rotate(45deg);
          margin-bottom: 1em;
          background: var(--teal);
          color: var(--navy);
        }

        .issue-no > span {
          display: block;
          transform: rotate(-45deg);
        }

        .menu-toggle[data-toggled='true'] > .issue-no {
          color: var(--baby-blue);
        }

        .issue-overview {
          max-width: 40ch;
          text-align: center;
        }
      `}</style>
    </>
  );
}
