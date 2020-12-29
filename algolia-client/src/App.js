import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  RefinementList,
  Panel,
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
      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="tools">
          <div className="search-panel">
            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <RefinementList attribute="features" />

              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit({ hit, name }) {
  const { logo } = hit;
  const image = logo && logo[0] && logo[0].downloadURL;
  return (
    <Panel header={<Highlight attribute="name" hit={hit} />}>
      <img src={image} width="100"></img>
    </Panel>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
