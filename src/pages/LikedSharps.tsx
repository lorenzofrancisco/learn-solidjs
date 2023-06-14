import { createSignal } from "solid-js";

const [likedSharps , setlikedSharps] = createSignal([]);
const LikedSharps = () => {
  return (
    <div>
        <h1>Liked Sharps</h1>
    </div>
    );
};

export default LikedSharps;
