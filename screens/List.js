import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-navigation";

const cheerio = require("cheerio");


const extractImages = (html) => {
  const images = [];
  const imgRegex = /<img.*?src=["'](.*?)["'].*?alt=["'](.*?)["'].*?>/g;

  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const src = match[1];
    const alt = match[2];
    images.push({ src, alt });
  }

  return images;
};


export default function List() {
  const [list, setList] = useState();

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/6393315864780645527/posts?maxResults=10&key=AIzaSyARMci7Ly0Gct3GdvedC0RvEkIkJxPp8us"
      )
      .then(function (response) {
        setList(response.data.items);
        for (let i = 0; i < response.data.items.length; i++) {
          const htmlContent = response.data.items[i].content;
          const $ = cheerio.load(htmlContent);
          const images = $("img");
          response.data.items[i].img = $(images[0]).attr('src');
          console.log(response.data.items[i].img);
        }

        setList(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  
  return (
    <View>
      <SafeAreaView />
      <Text>List Posts</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.img }}
              style={{ height: 200, width: "100%" }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
