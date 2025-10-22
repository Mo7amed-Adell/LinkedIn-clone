"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import ReactPlayer from "react-player";
import { User } from "firebase/auth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase"; 

interface PostModalProps {
  showModal: boolean;
  handleClick : () => void;
  handleClose : () => void;
  user: User | null;
}

const PostModel: React.FC<PostModalProps> = ({ showModal, handleClick , handleClose , user  }) => {
  const [editorText, setEditorText] = useState<string>("");
  const [assetArea, setAssetArea] = useState<"image" | "media" | "">("");
  const [shareImage, setShareImage] = useState<File | null>(null);
  const [videoLink, setVideoLink] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    if (!image) {
      alert("Please select a valid image file.");
      return;
    }
    setShareImage(image);
  };

  const switchAssetArea = (area: "image" | "media") => {
    setShareImage(null);
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = () => {
    setEditorText("");
    setShareImage(null);
    setVideoLink("");
    setAssetArea("");
    handleClose();
  };

   const handlePostArticles = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to post.");
      return;
    }

    const payload = {
      image: shareImage ? shareImage.name : null, // You can upload the actual image to Firebase Storage later
      video: videoLink,
      user: {
        name: user.displayName || "Anonymous",
        photoURL: user.photoURL || "/user.svg",
      },
      description: editorText,
      timestamp: Timestamp.now(),
    };

    await addDoc(collection(db, "articles"), payload);
    reset();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex justify-center items-start pt-12 overflow-y-auto">
      <div className="bg-white w-full max-w-[550px] rounded-md shadow-lg flex flex-col">
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
          <h2 className="text-gray-700 font-semibold text-lg">Create a post</h2>
          <button
            onClick={reset}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <img src="/close-icon.svg" alt="close" className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col p-4">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/user.svg"
              alt="user"
              className="w-12 h-12 rounded-full border"
            />
            <span className="font-medium text-gray-800">User Name</span>
          </div>

          <textarea
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
            placeholder="What do you want to talk about?"
            className="w-full border-none outline-none resize-none min-h-[100px] text-base text-gray-800"
            autoFocus
          />

          {assetArea === "image" && (
            <div className="text-center mt-3">
              <label
                htmlFor="file"
                className="cursor-pointer block text-blue-600 underline mb-3"
              >
                Select an image to share
              </label>
              <input
                type="file"
                id="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleChange}
              />
              {shareImage && (
                <img
                  src={URL.createObjectURL(shareImage)}
                  alt="preview"
                  className="w-full rounded-md"
                />
              )}
            </div>
          )}

          {assetArea === "media" && (
            <div className="mt-3">
              <input
                type="text"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                placeholder="Please input a video link"
                className="w-full border border-gray-300 rounded-md p-2 text-sm outline-none"
              />
              {videoLink && (
                <ReactPlayer
                  width="100%"
                  height="300px"
                  src={videoLink}
                  className="mt-3"
                />
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => switchAssetArea("image")}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <img src="/share-image.svg" alt="image" className="w-6 h-6" />
            </button>
            <button
              onClick={() => switchAssetArea("media")}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <img src="/share-video.svg" alt="video" className="w-6 h-6" />
            </button>
            <button className="flex items-center gap-1 border-l border-gray-300 pl-3 text-gray-600 hover:bg-gray-100 rounded-full px-3 py-1 text-sm">
              <img src="/share-comment.svg" alt="comment" className="w-4 h-4" />
              Anyone
            </button>
          </div>

          <button
            onClick={handlePostArticles}
            disabled={!editorText}
            className={`px-5 py-2 rounded-full font-medium text-white transition-colors ${
              !editorText
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-800"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModel;
