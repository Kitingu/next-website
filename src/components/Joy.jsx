import Image from 'next/image';

const Joy = () => {
  return (
    <div className="relative w-full h-[50dvh]">
      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-pink-500 opacity-50 z-10"></div> {/* Pink overlay */}
      
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bring_joy_to_fam.jpeg" // Path from the public folder
          alt="Bring joy to fam"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Makes sure the image covers the container
        />
      </div>
    </div>
  );
};

export default Joy;
