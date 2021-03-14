import { Spacer } from 'components/spacer';
import Spread from 'components/spread';
import { useState } from 'react';
import Logo from '../svg/logo.svg';
import Link from 'next/link';

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <>
      <div className="container" data-image-bg={buttonHovered}>
        <div className="stickers">
          <Logo />
          <Spacer />
          <Logo className="logo-flipped" />
        </div>
        <Spread menuLabel>
          <div className="content">
            <p>
              <strong>From the provinces. Talents of the provinces.</strong> A
              zine showcasing the stories and works of probinsyano designers
              from the Philippines.
            </p>
            <Link href="/issue-2-galing-mindanao/uncurated-studio">
              <button
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
              >
                READ ISSUE NO. 2: GALING MINDANAO
              </button>
            </Link>
          </div>
        </Spread>
      </div>
      <style jsx>{`
        .container {
          background: var(--navy);
          color: var(--cream);
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .container[data-image-bg='true'] {
          background: linear-gradient(
              rgba(11, 31, 60, 0.25),
              rgba(11, 31, 60, 0.25)
            ),
            url(/images/home-bg.jpg) no-repeat center center;
          background-size: cover;
        }

        .stickers,
        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .stickers :global(.logo-flipped) {
          transform: rotate(180deg);
        }

        .content {
          flex-direction: column;
        }
        .content > p {
          text-align: center;
          max-width: 22em;
          line-height: 2;
          margin-bottom: 2em;
        }
      `}</style>
    </>
  );
}
