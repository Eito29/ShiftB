import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams(); // useParamsがURLの数字を読み取る
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // ローディング開始
      const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
      const { post } = await res.json(); // ※posts.jsとは中身が違うので注意（APIの方ではpostというオブジェクト名がある）
      setPost(post);
      setLoading(false); // ローディング終了
    }

    getData();
  }, [id]); // id が変わったときにもう一回実行

  if (loading) {
    return <div>読み込み中…</div>
  }

  if (!post) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <div className='container'>
      <div className='block mb-5'>
        <img src={post.thumbnailUrl} alt="" />
      </div>
      <div className='flex justify-between mb-2'>
        <div className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <div className="flex justify-between gap-2">
          {post.categories.map((category) => {
            return(
              <div key={category} className="border border-solid border-blue-900 rounded p-1 text-blue-900">
                {category}
              </div>
            )
          })}
        </div>
      </div>
      <h1 className="text-2xl mb-3">{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content}}></p>
    </div>
  );
}

export default Detail;
