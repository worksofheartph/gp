import TopMenu from 'components/top-menu';
import { useEffect } from 'react';
import { usePage } from 'stores';

type ArticleProps = {
  color: string;
};

export default function Article({
  color,
  children,
}: React.PropsWithChildren<ArticleProps>) {
  const current = usePage((state) => state.current);
  return (
    <div className="article">
      <Spread first={current === 0}>{children}</Spread>
      <style jsx>{`
        .article {
          --article-color: var(--${color});
        }
      `}</style>
    </div>
  );
}

type SpreadProps = {
  first?: boolean;
};

function Spread({ first, children }: React.PropsWithChildren<SpreadProps>) {
  const next = usePage((state) => state.next);
  const prev = usePage((state) => state.prev);
  const setTotal = usePage((state) => state.setTotal);
  useEffect(() => setTotal(children.length), [setTotal]);
  return (
    <>
      <div className="bg bg-navy">
        <div className="container" data-first={first}>
          <div className="content">{children}</div>
          <div className="prev" onClick={prev}></div>
          <div className="next" onClick={next}></div>

          <TopMenu />
        </div>
      </div>
      <style jsx>{`
        .bg {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .container {
          flex: 1;
          position: relative;
          background: var(--article-color);
          transition: background 1s ease-in-out;
        }
        .container[data-first='true'] {
          background: var(--cream);
        }
        .content {
          position: absolute;
          top: 0;
          left: 4%;
          right: 4%;
          bottom: 0;
          font-size: 1vw;
          transform-style: preserve-3d;
          perspective: 150vw;
          isolation: isolate;
        }
        @media (min-aspect-ratio: 1152 / 700) {
          .container {
            max-width: calc(100vh * 1152 / 700);
            height: 100vh;
          }
        }
        @media (max-aspect-ratio: 1152 / 700) {
          .container {
            padding-top: calc(100% / 1152 * 700);
          }
        }
        .prev,
        .next {
          position: absolute;
          top: 0;
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
      `}</style>
    </>
  );
}
