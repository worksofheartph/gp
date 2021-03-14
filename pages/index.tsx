import TopMenu from 'components/top-menu';
import { useState } from 'react';
import Logo from '../svg/logo.svg';

export default function Home() {
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <>
      <div className="container" data-image-bg={buttonHovered}>
        <Logo />
        <div className="content">
          <p>
            <strong>From the provinces. Talents of the provinces.</strong> A
            zine showcasing the stories and works of probinsyano designers from
            the Philippines.
          </p>
          <button
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            READ ISSUE NO. 2: GALING MINDANAO
          </button>
        </div>
        <Logo className="logo-flipped" />
      </div>
      <TopMenu />
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
              rgba(11, 31, 60, 0.2),
              rgba(11, 31, 60, 0.2)
            ),
            url(/images/home-bg.jpg) no-repeat center center;
          background-size: cover;
        }
        :global(.logo-flipped) {
          transform: rotate(180deg);
        }
        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
