"use client"
import Image from "next/image";
import { auth, provider } from "@/firebase.js"
import { signInWithPopup, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogIn() {
 const router = useRouter();
  const handleGoogleSignIn = async() => {
   const result = await signInWithPopup(auth , provider);
   const user = result.user;
   router.push("/")
  }
  return (
    <div className="p-0 bg-white min-h-screen">
      <nav className="max-w-[1128px] mx-auto flex  justify-between py-4 px-0 flex-nowrap mb-[30px]">
        <a href="/index.html" className="w-[135px] h-[34px] absolute left-10">
          <Image
            src="/login-logo.svg"
            alt="Logo"
            width={135}
            height={34}
            priority
          />
        </a>

        <div className="flex items-center absolute right-30">
          <a
            href="#"
            className="text-[16px] text-black/60 mr-3 px-3 py-2 rounded hover:bg-black/10 hover:text-black/90 no-underline"
          >
            Join now
          </a>
          <a
            href="#"
            className="text-[#0a66c2] font-semibold text-[16px] leading-10 border border-[#0a66c2] rounded-full px-6 py-2 text-center transition duration-150 hover:bg-[#70b5f926] hover:text-[#0a66c2] no-underline"
          >
            Sign in
          </a>
        </div>
      </nav>

   <section className="relative flex flex-wrap w-full max-w-[1128px] mx-auto min-h-[700px] py-[40px] pb-[130px] ">
  <div className="relative z-10 w-full">
    <h1
      className="text-[#2977c9] text-[56px] font-light leading-[70px] w-[55%] pb-0
      max-[768px]:text-center max-[768px]:text-[22px] max-[768px]:w-full max-[768px]:leading-relaxed"
    >
      Welcome to your professional community
    </h1>
  </div>

  <div
    className="absolute  right-[-300px] w-[800px] h-[600px] z-0
    max-[1024px]:right-[-50px] max-[768px]:static max-[768px]: max-[768px]:w-full max-[768px]:h-auto"
  >
    <Image
      src="/login-hero.svg"
      alt="Hero"
      fill
      style={{ objectFit: "contain" }}
      priority
    />
  </div>

  <div className="relative z-10 mt-[120px] w-[400px] max-[768px]:mt-[40px]">
    <button
      type="button"
      className="flex justify-center items-center gap-2 bg-white w-full h-[56px] rounded-full
      shadow-[inset_0_0_0_1px_rgba(0,0,0,0.6)]
      text-[20px] text-black/60 transition duration-150 hover:bg-gray-200/25 hover:text-black/75"
      onClick={handleGoogleSignIn}
    >
      <Image
        src="/google.svg"
        alt="Google"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      Sign in with Google
    </button>
  </div>
</section>
    </div>
  );
}
