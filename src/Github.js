import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Grid, Icon } from "semantic-ui-react";
import { device } from "./styled/sizes";
import theme from "./styled/theme";

export default () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    let res = await Axios.get(
      "https://api.github.com/users/facebook/repos?sort=created"
    );
    console.log(res);
    setRepos(res.data);
  };

  return (
    <Grid>
      <Grid.Row>
        {repos &&
          repos.map((r) => (
            <Grid.Column key={r.id} width={4}>
              <StyledCard color="red">
                <Card.Content>
                  <Card.Header>
                    <Truncated>
                      <Star>
                        <Icon name="star" />
                      </Star>
                      {r.full_name}
                    </Truncated>
                  </Card.Header>
                  <Card.Meta>
                    <Truncated wrap>{r.description}</Truncated>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <StyledButton href={r.html_url} target="_blank">
                    view
                  </StyledButton>
                </Card.Content>
              </StyledCard>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

const ButtonLink = styled.a`
  float: right;
  padding: 10px 30px !important;
  color: white !important;
  background-color: black;
`;

const StyledButton = styled(ButtonLink)`
  display: flex;
  background-color: ${theme.primary};

  padding: 30px 60px !important;
  justify-content: center;
  transition: color 2.2s !important;
  cursor: pointer;

  &:hover {
    color: green !important;
    background-color: red;
    transition: color 0.2s !important;
    transition: background 0.2s !important;
  }
  &:visted {
    color: pink;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to{
    transform: rotate(360deg);
  }
 `;
const Star = styled.div`
  display: inline-block;
  color: yellow;
  text-shadow: 1px 2px 1px black;
  animation: ${rotate360} 2s linear infinite;
`;
const StyledCard = styled(Card)`
  min-height: 200px !important;
  margin-bottom: 10px !important;
  background: blue !important;

  @media ${device.tablet} {
    background: green !important;
  }
  @media ${device.mobile} {
    background: red !important;
  }
`;

const Truncated = styled.div`
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  overflow: hidden !important;
  -webkit-line-clamp: 2 !important; /* number of lines to show */
  -webkit-box-orient: vertical !important;
  @media ${device.tablet} {
    min-height: 800px !important;
    background: o !important;
  }
  @media ${device.mobile} {
    min-height: 800px !important;
    background: red !important;
  }
`;
