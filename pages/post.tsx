import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Header } from "../stories/modules/header/Header";
import { OptionList } from "../stories/modules/optionList/OptionList";
import { Post } from "../stories/modules/Post/Post";
import user5 from "../public/image/user5.png";
import { Toolbar } from "../stories/modules/toolbar/Toolbar";
import { SearchBar } from "../stories/modules/searchBar/SearchBar";
import { useRecoilState } from "recoil";
import { postState } from "../store/states";
import { getPosts } from "../api/posts";
import { StaticImageData } from "next/image";

export interface PostProps {
  _id?: string;
  user: {
    name: string;
    avatar: string | StaticImageData;
  };
  content: string;
  src?: StaticImageData;
  createdAt?: string;
  className?: string;
  like?: number;
  comments?: any[];
}

export const PostPage: NextPage = () => {
  const [options, _setOptions] = useState([
    { name: "杰哥後援會", icon: user5 },
  ]);
  const [postData, setPostData] = useRecoilState(postState);

  useEffect(() => {
    getPosts().then(data => {
      setPostData(data);
    });
  }, [setPostData]);

  return (
    <>
      <Header />
      <div className="flex justify-center min-h-screen h-full pt-4 px-3 pb-20 md:px-0 md:pt-12 bg-c-bg">
        <main className="max-w-[1200px] w-full flex justify-between">
          <div className="w-full md:w-3/4 md:pr-7">
            <SearchBar />
            {postData.length > 0 &&
              postData.map((data: PostProps) => (
                <Post
                  key={data?._id}
                  _id={data?._id}
                  user={data?.user}
                  content={data?.content}
                  src={data?.src}
                  createdAt={data?.createdAt}
                  like={data?.like}
                  comments={data?.comments}
                  className="mb-4"
                />
              ))}
          </div>
          <div className="hidden md:block md:w-1/4">
            <OptionList options={options} />
          </div>
          <Toolbar className="md:hidden fixed bottom-10 left-2/4 transform -translate-x-1/2" />
        </main>
      </div>
    </>
  );
};

export default PostPage;
