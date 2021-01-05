import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
  RangeInput,
} from 'react-instantsearch-dom';
import Tool from './Tool';
import Hit from './Hit';
import '../App.css';

const searchClient = algoliasearch(
  '707AVCGZHE',
  '5d080d608847e02b6ac0fefce2dc3daa'
);

class Search extends Component {
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
            <Tool />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Search;