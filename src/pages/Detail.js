import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from 'data/posts';

const Detail = () => {
  const { id } = useParams(); // useParamsがURLの数字を読み取る
  const post = posts.find(p => p.id === Number(id)); // posts配列から１つ(p)ずつ取り出して、そのid【item.id】が同じならそれを数字で【Number(id)】返して

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
