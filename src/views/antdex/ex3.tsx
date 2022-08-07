import React, { useState, useEffect } from "react";
import { List, message, Avatar } from "antd";
import VirtualList from "rc-virtual-list";

interface UserItem {
  //   email: string;
  //   gender: string;
  name: string;
  //   {
  //     // first: string;
  //     // last: string;
  //     title: string;
  //   };
  //   nat: string;
  //   picture: {
  //     large: string;
  //     medium: string;
  //     thumbnail: string;
  //   };
}

const ContainerHeight = 400;

const App: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const appendData = () => {
    // fetch(fakeDataUrl)
    //   .then(res => res.json())
    //   .then(body => {

    //     message.success(`${body.results.length} more items loaded!`);
    //   });
    let randomList = [];
    let list: UserItem[] = [];
    for (let i = 0; i < 10; i++) {
      let id = parseInt(String(Math.random() * 10000));
      list.push({ name: "hhh" + id });
    }
    setData(data.concat(list));
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.name}>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.name}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default App;
