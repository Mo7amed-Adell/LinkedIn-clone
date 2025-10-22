"use client";
import React, { useState , useEffect } from "react";
import ReactPlayer from "react-player";
import PostModel from "./PostModel";
import { useAuth } from "./AuthProvider";
import { Timestamp,collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
interface Article {
  id: string;
  user: {
    name: string;
    photoURL: string;
  };
  description: string;
  image?: string;
  video?: string;
  timestamp: Timestamp;
}

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const {user , loading} = useAuth();
  const [articles, setArticles] = useState<Article[]>([]);

  const handleClick = () => setShowModal(!showModal);
  const handleClose = () => setShowModal(false);


    useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, "articles"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const articlesData: Article[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Article, "id">),
      }));
      setArticles(articlesData);
    };

    fetchArticles();
  }, []);



  return (
    <div className="flex flex-col col-span-2">
      <div className="bg-white rounded-md shadow border border-gray-200 mb-2">
        <div className="flex items-center p-4">
          <img
            src="/user.svg"
            alt=""
            className="w-12 h-12 rounded-full mr-3"
          />
          <button
            onClick={handleClick}
            className="flex-1 text-left border border-gray-300 rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Start a post
          </button>
        </div>

        <div className="flex justify-around flex-wrap p-2">
          <button className="flex items-center text-sm text-blue-400 font-medium hover:bg-gray-100 p-2 rounded-md transition">
            <img src="/photo-icon.svg" alt="" className="mr-2" />
            <span>Photo</span>
          </button>
          <button className="flex items-center text-sm text-blue-400 font-medium hover:bg-gray-100 p-2 rounded-md transition">
            <img src="/video-icon.svg" alt="" className="mr-2" />
            <span>Video</span>
          </button>
          <button className="flex items-center text-sm text-blue-400 font-medium hover:bg-gray-100 p-2 rounded-md transition">
            <img src="/event-icon.svg" alt="" className="mr-2" />
            <span>Event</span>
          </button>
          <button className="flex items-center text-sm text-blue-400 font-medium hover:bg-gray-100 p-2 rounded-md transition">
            <img src="/article-icon.svg" alt="" className="mr-2" />
            <span>Write article</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow border border-gray-200 mb-3 overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 relative">
              <div className="flex items-center">
                <img
                  src={article.user.photoURL}
                  alt=""
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-black">
                    {article.user.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.description}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.timestamp?.toDate().toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button className="absolute right-4 top-3">
                <img src="/ellipsis.svg" alt="" className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-800 px-4 pb-2">
              {article.description}
            </p>

            <div className="w-full bg-gray-50">
              {article.video ? (
                <ReactPlayer width="100%" src={article.video} />
              ) : (
                article.image && (
                  <img
                    src={article.image}
                    alt=""
                    className="object-contain w-full h-auto"
                  />
                )
              )}
            </div>

            <ul className="flex items-center border-b border-gray-200 px-4 py-2 text-xs text-gray-600">
              <li className="flex items-center mr-4">
                <img
                  src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                  alt=""
                  className="w-4 h-4 mr-1"
                />
                <span>75</span>
              </li>
              <li>1 share</li>
            </ul>

            <div className="flex justify-around py-2">
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-md px-4 py-2 transition">
                <img src="/like-icon.svg" alt="" className="mr-2" />
                <span className="font-semibold">Like</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-md px-4 py-2 transition">
                <img src="/comment-icon.svg" alt="" className="mr-2" />
                <span className="font-semibold">Comment</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-md px-4 py-2 transition">
                <img src="/share-icon.svg" alt="" className="mr-2" />
                <span className="font-semibold">Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-md px-4 py-2 transition">
                <img src="/send-icon.svg" alt="" className="mr-2" />
                <span className="font-semibold">Send</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <PostModel showModal={showModal} handleClick={handleClick} handleClose={handleClose} user={user} />
    </div>
  );
}
