import { useState } from "react";

export function useIndex() {
  const [text, setText] = useState("");
  const [tweetList, setTweetList] = useState([]);
  const maxLength = 125;

  const tweet = {
    date: new Date().toLocaleDateString(),
    text: text,
    user: {
      name: "Rodrigo Rosa",
      username: "rodrigosrosa89",
      picture: "https://github.com/rodrigosrosa89.png",
    },
  };

  function onTextChange(event) {
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sendTweet(event) {
    setTweetList([...tweetList, tweet]);
  }

  return {
    text,
    onTextChange,
    maxLength,
    sendTweet,
    tweetList,
  };
}
