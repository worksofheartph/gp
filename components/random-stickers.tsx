export default function RandomStickers({ stickers }) {
  const Stickers = stickers.map((sticker, i) => {
    const Sticker = require(`../svg/stickers/${sticker.svg}`).default;
    return <Sticker key={i} style={sticker.style} />;
  });
  return (
    <>
      <div className="container">{Stickers}</div>
      <style jsx>{`
        .container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .container :global(svg) {
          position: absolute;
          height: 5vw;
        }
      `}</style>
    </>
  );
}
