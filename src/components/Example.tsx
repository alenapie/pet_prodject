import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Example = () => {
  const [posts, setPosts] = useState<TPost[]>();

  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {posts.map(({ id, title, body }) => (
        <ListItem key={id}>
          <ListItemText primary={title} secondary={body} />
        </ListItem>
      ))}
    </List>
  );
};
