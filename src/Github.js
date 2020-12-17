import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Grid, Icon } from "semantic-ui-react";

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
  background-color: #234567;

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
  height: 200px;
  margin-bottom: 10px !important;

  &:hover {
    animation: ${rotate360} 0.2s linear infinite;
  }
`;

const Truncated = styled.div`
  white-space: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
`;
