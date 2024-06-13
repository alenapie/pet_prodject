import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

type TComment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export const Comments = () => {
  const [comments, setComments] = useState<TComment[]>([]);

  const getComments = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();

    setComments(data);
  };
  useEffect(() => {
    getComments();
  }, []);

  if (!comments) {
    return <div>Loading...</div>;
  }
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {comments.map(({ id, name, email, body }) => (
        <ListItem key={id}>
          <ListItemText primary={`${name}, ${email}`} secondary={body} />
        </ListItem>
      ))}
    </List>
  );
};
