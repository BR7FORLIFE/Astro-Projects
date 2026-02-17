import { useState } from "react"

export default function LikeButton({}){
    const [like, setlilke] = useState(false)

    const likeUrl = "src/assets/images/like.svg"
    const unlikeUrl = "src/assets/images/unlike.svg"

    return (
        <button onClick={() => setlilke(!like)} className="flex justify-start items-center gap-2">
            <img src={like ? likeUrl : unlikeUrl } alt="heart icon" className="w-5 h-auto object-contain" />
            <span className="text-sm text-neutral-700">Like</span>
        </button>
    )
}