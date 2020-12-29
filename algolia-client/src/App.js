import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  RangeInput,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  '707AVCGZHE',
  '5d080d608847e02b6ac0fefce2dc3daa'
);

class App extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="tools" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h3>Geschikt voor</h3>
            <RefinementList attribute="suitableFor" />
            <h3>Features</h3>
            <RefinementList attribute="features" />
            <h3>Deelnemers</h3>
            <RangeInput attribute="maxDeelnemers" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  const { hit } = props;
  const { logo } = hit;
  const image = logo && logo[0] && logo[0].downloadURL;
  // console.log(hit);
  return (
    <div>
      <img src={image} align="left" alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">{props.hit.price}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
