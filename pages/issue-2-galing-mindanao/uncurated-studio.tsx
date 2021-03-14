import Article from 'components/article';
import Page, { TitlePage } from 'components/page';
import React from 'react';

export default function UncuratedStudio() {
  return (
    <>
      <Article color="magenta">
        <TitlePage
          number={1}
          title="Uncurated Studio"
          author="Karl Adrian Aguro"
          location="Cagayan de Oro"
        >
          “Design doesn’t have to be beautiful [all the time]. I’ve always
          believed na if it serves a purpose, it’s good, regardless of whether
          it’s weird and obscure.”
        </TitlePage>
        <Page number={2}>
          <img
            src="https://source.unsplash.com/800x800?person"
            className="full-bleed"
          />
        </Page>
        <Page number={3}>
          <h1>Page 3</h1>
        </Page>
        <Page number={4}>
          <h1>Page 4</h1>
        </Page>
        <Page number={5}>
          <h1>Page 5</h1>
        </Page>
        <Page number={6}>
          <h1>Page 6</h1>
        </Page>
        <Page number={7}>
          <h1>Page 7</h1>
        </Page>
        <Page number={8}>
          <h1>Page 8</h1>
        </Page>
      </Article>
    </>
  );
}
