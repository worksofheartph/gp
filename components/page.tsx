import { usePage } from 'stores';

type PageProps = {
  number: number;
  colored?: boolean;
};

export default function Page({
  number,
  colored,
  children,
}: React.PropsWithChildren<PageProps>) {
  const current = usePage((state) => state.current);
  const total = usePage((state) => state.total);
  const turned = current + 1 >= number;
  return (
    <>
      <div className="page" data-turned={turned} data-colored={colored}>
        {children}
      </div>
      <style jsx>{`
        .page {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          display: grid;
          grid-template-columns: repeat(auto-fill, calc(100% / 12));
          grid-template-rows: repeat(auto-fill, calc(100% / 12));
          background: var(--cream);
          color: var(--navy);
          backface-visibility: hidden;
          transition: transform 1s ease-in-out;
          z-index: ${total - number};
        }

        .page:nth-child(1) {
          transform: rotateY(0);
          z-index: 0;
        }

        .page:nth-child(odd) {
          left: 0;
          transform-origin: right center;
          transform: rotateY(180deg);
        }
        .page[data-turned='true']:nth-child(odd) {
          transform: rotateY(0);
          z-index: 0;
        }
        .page:nth-child(even) {
          left: 50%;
          transform-origin: left center;
          transform: rotateY(0deg);
        }
        .page[data-turned='true']:nth-child(even) {
          transform: rotateY(-180deg);
        }

        .page[data-colored='true'] {
          background: var(--article-color);
          color: var(--cream);
        }

        :global(img.full-bleed) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          grid-area: 1 / 1 / -1 / -1;
        }
      `}</style>
    </>
  );
}

type TitlePageProps = PageProps & {
  title: string;
  author: string;
  location: string;
};

export function TitlePage({
  title,
  author,
  location,
  children,
  ...rest
}: React.PropsWithChildren<TitlePageProps>) {
  return (
    <>
      <Page colored {...rest}>
        <h1 className="title">{title}</h1>
        <div className="author">{author}</div>
        <div className="location">{location}</div>
        <div className="quote">{children}</div>
      </Page>
      <style jsx>{`
        .title,
        .author,
        .location,
        .quote {
          grid-column: 2 / -2;
        }
        .quote {
          grid-row: -3 / -2;
          align-self: flex-end;
          font-size: 2em;
        }
      `}</style>
    </>
  );
}
