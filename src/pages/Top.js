import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Top() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts`);
      const data = await res.json(); // 取得データ【dataのpostsオブジェクト】をsetPostsにセット
      setPosts(data.posts);
    }

    getData();
  }, []);

  if (!posts) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <>
      <div className="container">
        {/* posts 配列を map で1つずつ取り出す → post という変数に代入 */}
        {posts.map((post) => {
          return (
            <Link to={`/detail/${post.id}`} key={post.id}>
              <div className="border border-solid mb-5 p-4">
                <div className="flex justify-between mb-2">
                  <div className="text-sm text-gray-500">
                    {/* post.createdAt生データ　→　newDateで文字列をDate型に変換　→　 .toLocaleDateString()で表記を変える*/}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex justify-between gap-2">
                    {post.categories.map((category) => {
                      return (
                        <div key={category} className="border border-solid border-blue-900 rounded p-1 text-blue-900">{category}</div>
                      );
                    })}
                  </div>
                </div>
                <h1 className="text-2xl mb-3">{post.title}</h1>
                <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }}></p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}