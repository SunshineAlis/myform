
import Pinecone from "./Pinecone"

export const CardHeader = () => {
  return (
    <>
     
      <Pinecone className="width={60} height={60}"/>
      <h1 className="font-semibold text-xl">Join Us! 😎</h1>
      <h3 className="text-lg font-normal text-[#8E8E8E]">
        Please provide all current information accurately.
      </h3>
    </>
  );
};