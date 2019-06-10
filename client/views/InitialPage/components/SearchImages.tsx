import * as React from 'react';
import axios from 'axios';

import {
  ResultsWrapper,
  SearchFormWrapper,
  ImageWrapper,
  Image,
  Input,
  ButtonWrapper,
} from './styled';

interface State {
  searchValue: string;
  foundedImages: any[];
  imagesUrl: string[];
}

export class SearchImages extends React.PureComponent<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchValue: '',
      foundedImages: [],
      imagesUrl: [],
    };
  }

  changeSearchInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      searchValue: value,
    })
  }

  searchImage = () => {
    this.setState({
      foundedImages: [],
    })

    axios.get('/api/images', {params: {
      searchValue: this.state.searchValue,
    }})
    .then((response: any) => {
      this.setState({
        foundedImages: response.data,
      })
    })
    .catch(err => {
      console.error(err)
    })
  }

  handleRenderResults = () => {
    const {foundedImages} = this.state;
    const giphyImagesResults = foundedImages[0].data.map((image: any) => {
      return image.images.original.url
    })
    const pixabayImagesResults = foundedImages[1].hits.map((image: any) => {
      return image.previewURL;
    })

    return [...giphyImagesResults, ...pixabayImagesResults];
  }

  render() {
    return (
      <React.Fragment>
        <SearchFormWrapper>
        <Input
          onChange={this.changeSearchInputValue}
          placeholder="Search image"
        />
        <ButtonWrapper
          type="button"
          onClick={this.searchImage}
        >
          Search
        </ButtonWrapper>
        </SearchFormWrapper>
        <ResultsWrapper>
          {this.state.foundedImages.length > 0 ?
          <React.Fragment>
            {this.handleRenderResults().map((imagePreviewUrl: string) => {
              return (
                <ImageWrapper>
                  <Image src={imagePreviewUrl}/>
                </ImageWrapper>
              )
            })}
          </React.Fragment>
          : null}
        </ResultsWrapper>
      </React.Fragment>
    )
  }
}
