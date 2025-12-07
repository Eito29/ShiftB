import React, { useEffect, useState } from "react";
import { posts } from "../data/posts.js";

export default function Top() {
    return (
        <>
            <div className="container">
                {/* posts 配列を map で1つずつ取り出す → post という変数に代入 */}
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="border border-solid mb-5 p-4">   
                            <div className="flex justify-between mb-2">
                                <div className="text-sm text-gray-500">
                                    {/* post.createdAt生データ　→　newDateで文字列をDate型に変換　→　 .toLocaleDateString()で表記を変える*/}
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex justify-between gap-2">
                                    {post.categories.map((arr) => {
                                        return (
                                            <div key={arr} className="border border-solid border-blue-900 rounded p-1 text-blue-900">{arr}</div>
                                        );
                                    })}
                                </div>
                            </div>
                            <h1 className="text-2xl mb-3">{post.title}</h1>
                            <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content}}></p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}