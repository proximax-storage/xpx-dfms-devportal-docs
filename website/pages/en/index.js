/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
        <div className="home jumbotron gap">
          <div className="inner">
            <img src="img/illustration-developer.png" className="jumbotron-img" />
            <h1>Develop your apps with ProximaX Distributed File Management System as a backbone.</h1>
            <h6>Providing you the maximum data security to protect your digital assets.</h6>
            <a href="docs/getting_started/what_is" class="button button-filled">Getting Started &rarr;</a>
            <p>Storage V3 DFMS Guide &mdash; NEW UPDATE! <span>07.01.2019</span></p>
          </div>
          <div class="bg-diagonal"></div>
        </div>
    );
  }
}

class BriefDef extends React.Component{
  render(){

    return (
      <section className="container text-center">
        <div className="briefDef ">
          <p>The <strong>ProximaX</strong> storage layer is deployed through a <strong>Distributed File Management System (“DFMS”)</strong> protocol which integrates directly with the blockchain layer. Its peer-to-peer distributed architecture makes the network decentralised and users free from the influence of any third-party storage provider, and allows for client-side encryption for maximum data security. This system is immune to common threats of security and privacy as it is based on encrypted and sharded file storage in a peer-to-peer network.</p>
        </div>
      </section>
    );
  }
}

class ExtraScript extends React.Component{
  render(){

    return (
      <script src="../../js/custom.js"></script>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const CardBlock_threeColumn = props => (
      <Container
        id={props.id}
        background={props.background}>
        <RenderCards cardsData={props.children} />
      </Container>
    );

    const RenderCards = (cardProps) => {

      const cards = cardProps.cardsData
        .map(cardInfo => (
          <a className="blockElement imageAlignTop fourByGridBlock" href={cardInfo.link} key={cardInfo.link} >
              <div className="card">
                <div className="blockImage">
                  <img src={cardInfo.image} />
                </div>
                <div className="blockContent">
                  <h2>
                    <div>
                      <p>{cardInfo.title}</p>
                    </div>
                  </h2>
                  <div>
                    <p>{cardInfo.content}</p>
                  </div>
                </div>
              </div>
          </a>
        ));

        return (
          <div className="gridBlock card-container">{cards}</div>
        );
    }

    const Cards_firstRow = () => (
      <CardBlock_threeColumn>
        {[
          {
            content: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
            image: `${baseUrl}img/home-guides.png`,
            imageAlign: 'top',
            link: `${baseUrl}`,
            title: 'Guides',
          },
          {
            content: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
            image: `${baseUrl}img/home-built-in-features.png`,
            imageAlign: 'top',
            link: `${baseUrl}`,
            title: 'Built-in Features',
          },
          {
            content: 'The Quick Brown Fox Jumps Over The Lazy Dog.',
            image: `${baseUrl}img/home-references.png`,
            imageAlign: 'top',
            link: `${baseUrl}`,
            title: 'References',
          },
        ]}
      </CardBlock_threeColumn>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Cards_firstRow />
        </div>
        <BriefDef language={language} />
        <ExtraScript />
      </div>
    );
  }
}

module.exports = Index;
