/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Roles</h5>
            <a href={this.docUrl('roles/Owner', this.props.docsPart)}>
              Owner
            </a>
            <a href={this.docUrl('roles/replicator', this.props.docsPart)}>
              Replicator
            </a>
            <a href={this.docUrl('roles/verifier', this.props.docsPart)}>
              Verifier
            </a>
          </div>
          <div>
            <h5>Built-in Features</h5>
            <a href={this.docUrl('built_in_features/exchange', this.props.docsPart)}>
              Exchange
            </a>
            <a href={this.docUrl('built_in_features/drive/overview', this.props.docsPart)}>
              Drive
            </a>
            <a href={this.docUrl('built_in_features/challenge', this.props.docsPart)}>
              Challenge
            </a>
          </div>
          <div>
            <h5>Protocol</h5>
            <a href={this.docUrl('protocols/cross_block_protocol', this.props.docsPart)}>
              Cross-block protocol
            </a>
            <a href={this.docUrl('protocols/fair_streaming', this.props.docsPart)}>
              Fair streaming
            </a>
          </div>
        </section>

        <a
          href="https://code.facebook.com/projects/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
