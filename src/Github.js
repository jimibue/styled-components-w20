import styled from "styled-components";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Grid } from "semantic-ui-react";

export default () => {
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    let res = await Axios.get(
      "https://api.github.com/users/jimibue/repos?sort=created"
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
              <Card>
                <Card.Content>
                  <Card.Header>{r.full_name}</Card.Header>
                  <Card.Meta>{r.description}</Card.Meta>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};
