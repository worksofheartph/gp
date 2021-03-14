import TopMenu from 'components/top-menu';

type SpreadProps = {
  background?: React.ReactNode;
  menuLabel?: boolean;
};

export default function Spread({
  background,
  menuLabel,
  children,
}: React.PropsWithChildren<SpreadProps>) {
  return (
    <>
      <div className="container">
        <div className="aspect-ratio-box">
          {background}
          <div className="content">{children}</div>
          <TopMenu label={menuLabel} />
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .aspect-ratio-box {
          flex: 1;
          position: relative;
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
          .aspect-ratio-box {
            height: 100vh;
          }
        }
        @media (max-aspect-ratio: 1152 / 700) {
          .aspect-ratio-box {
            padding-top: calc(100% / 1152 * 700);
          }
        }
      `}</style>
    </>
  );
}
