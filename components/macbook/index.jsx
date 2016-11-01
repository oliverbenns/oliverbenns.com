import React, { Component, PropTypes } from 'react';

import macbookImageSrc from './img/macbook.png';
import rightArrowImageSrc from './img/right-arrow.svg';
import styles from './styles.module.css';

export default class Macbook extends Component {
  static propTypes = {
    images: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlideIndex: 0,
    };
  }

  changeSlide() {
    this.setState({
      activeSlideIndex: this.props.images.length - 1 === this.state.activeSlideIndex ? 0 : this.state.activeSlideIndex + 1,
    });
  }

  render() {
    return (
      <div className={styles.macbook}>
        <img src={macbookImageSrc} alt="Macbook Frame" />
        <div className={styles.content} onClick={this.changeSlide.bind(this)}>
          {this.props.images.map((image, index) => (
            <img
              src={image.src}
              key={image.description}
              alt={`${image.description} page screenshot ${index}`}
              className={this.state.activeSlideIndex === index ? styles.active : null}
            />
          ))}
          <a className={styles.button}>
            <img src={rightArrowImageSrc} />
          </a>
        </div>
      </div>
    );
  }
}
