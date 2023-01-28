import {Link} from 'react-router-dom'

import {
  VideosList,
  ThumbnailImage,
  VideoDetailsCard,
  VideoTitle,
  ViewsCount,
  PublishedText,
  CountsCard,
  ProfileContainer,
  ProfileImage,
  DetailContainer,
  ChannelName,
} from './styledComponents'

const NxtVideos = props => {
  const {eachVideo} = props
  const {id, publishedAt, thumbnailUrl, title, viewCount, channel} = eachVideo

  return (
    <VideosList>
      <Link to={`/videos/${id}`}>
        <ThumbnailImage src={thumbnailUrl} alt="a" />
      </Link>
      <DetailContainer>
        <ProfileContainer>
          <ProfileImage src={channel.profile_image_url} />
        </ProfileContainer>
        <VideoDetailsCard>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName> {channel.name} </ChannelName>
          <CountsCard>
            <ViewsCount> {viewCount} views</ViewsCount>
            <PublishedText> {publishedAt} </PublishedText>
          </CountsCard>
        </VideoDetailsCard>
      </DetailContainer>
    </VideosList>
  )
}

export default NxtVideos
