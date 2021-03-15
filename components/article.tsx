import Link from 'next/link';
import { useEffect } from 'react';
import { usePage } from 'stores';
import LogoSmall from '../svg/logo-small.svg';
import RandomStickers from './random-stickers';
import Spread from './spread';

type ArticleProps = {
  color: string;
  stickers: Array<any>;
};

export default function Article({
  color,
  stickers,
  children,
}: React.PropsWithChildren<ArticleProps>) {
  const current = usePage((state) => state.current);
  const next = usePage((state) => state.next);
  const prev = usePage((state) => state.prev);
  const setTotal = usePage((state) => state.setTotal);
  const firstPage = current === 0;
  useEffect(() => setTotal(children.length), [setTotal]);
  return (
    <div className="article">
      <RandomStickers stickers={stickers} />
      <Spread
        background={
          <>
            <div className="bg" />
            <div className="home">
              <Link href="/">
                <a>
                  <LogoSmall />
                </a>
              </Link>
            </div>
            <div className="prev" onClick={prev}></div>
            <div className="next" onClick={next}></div>
          </>
        }
      >
        {children}
      </Spread>
      <style jsx>{`
        .article {
          --article-color: var(--${color});
          height: 100vh;
          background-color: var(--navy);
          position: relative;
        }

        .bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${firstPage
            ? 'var(--cream)'
            : 'var(--article-color)'};
          transition: background-color 1s ease-in-out;
        }

        .home {
          position: absolute;
          top: 0;
          left: 0;
          width: 4%;
          height: 10%;
        }
        .home > a {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${firstPage ? 'var(--teal)' : 'var(--cream)'};
          transition: color 1s ease-in-out;
        }

        .prev,
        .next {
          position: absolute;
          top: 10%;
          width: 4%;
          bottom: 0;
          cursor: pointer;
        }
        .prev {
          left: 0;
        }
        .next {
          right: 0;
        }

        :global(.menu-toggle > .issue-no) {
          color: var(--cream);
          background-color: ${firstPage ? 'var(--teal)' : 'transparent'};
          border: 1px solid ${firstPage ? 'var(--teal)' : 'var(--cream)'};
        }
      `}</style>
    </div>
  );
}
