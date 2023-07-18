import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid white;
`;

const ProfileImage = styled.img`
    width: 50px;
    border-radius: 50%;
`;

function PostFooter() {
    return (
        <MainContainer>
            {posts.map((post) => (
                <ProfileImage src={post.profileImageUrl} alt="Post" />
            ))}
        </MainContainer>
    )
}

export default PostFooter;