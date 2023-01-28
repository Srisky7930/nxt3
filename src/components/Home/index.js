import {Component} from 'react'

import Cookies from 'js-cookie'
import NxtVideos from '../NxtVideos'
import Header from '../Header'

import {
  Container,
  SearchContainer,
  VideosContainer,
  VideosOrderList,
  InputContainer,
  SearchInput,
} from './styledComponents'

class Home extends Component {
  state = {
    videosList: [],
    search: '',
  }

  componentDidMount() {
    this.getHomeVideosDetails()
  }

  getHomeVideosDetails = async () => {
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const videosList = data.videos.map(each => ({
      id: each.id,
      channel: each.channel,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({
      videosList,
    })
  }

  onChangeSearchInput = event => {
    this.setState(
      {
        search: event.target.value,
      },
      this.getHomeVideosDetails,
    )
  }

  render() {
    const {videosList, search} = this.state
    console.log(videosList)

    return (
      <>
        <Container>
          <Header />
          <SearchContainer>
            <InputContainer>
              <SearchInput
                value={search}
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
            </InputContainer>
            <VideosContainer>
              <VideosOrderList>
                {videosList.map(eachItem => (
                  <NxtVideos eachVideo={eachItem} key={eachItem.id} />
                ))}
              </VideosOrderList>
            </VideosContainer>
          </SearchContainer>
        </Container>
      </>
    )
  }
}

export default Home
