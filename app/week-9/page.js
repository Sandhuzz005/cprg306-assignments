"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-indigo-500 p-6">
      {!user ? (
        <button
          onClick={async () => await gitHubSignIn()}
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-110 focus:ring focus:ring-pink-300"
        >
          Sign in with GitHub
        </button>
      ) : (
        <div className="text-center bg-white p-8 rounded-xl shadow-2xl border border-gray-400">
          <p className="mb-4 text-lg font-medium text-gray-900">
            Welcome, <span className="font-bold text-pink-600">{user.displayName}</span> ({user.email})
          </p>
          <button
            onClick={async () => await firebaseSignOut()}
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-110 focus:ring focus:ring-pink-300"
          >
            Logout
          </button>
          <div className="mt-4">
            <Link href="/week-9/shopping-list">
              <span className="text-indigo-600 font-bold underline cursor-pointer hover:text-indigo-500 transition duration-300">
                Go to Shopping List
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
