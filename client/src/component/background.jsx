const Backgroundgradient = () => {
  return (
    <div className="min-h-screen fixed inset-0 -z-10 bg-[radial-gradient(circle_1050px_at_50%_200px,#1a1a1a,transparent)] pointer-events-none">
      {/* Mobile - thinner, more subtle lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black md:hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_0.5px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_0.5px,transparent_1px)] bg-[size:4.5rem_3.5rem]">
        {/* Fade mask - lines visible on left, fade to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black"></div>
        {/* Small screen gradient */}
        <div className="min-h-screen absolute inset-0 bg-none bg-[radial-gradient(circle_10000px_at_0%_100px,#0a0a0a,transparent)]"></div>
      </div>
      
      {/* Desktop - thicker, more visible lines */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black hidden md:block bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_0.5px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_0.5px,transparent_1px)] bg-[size:4.5rem_3.5rem]">
        {/* Fade mask - lines visible on left, fade to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black"></div>
        {/* Large screen gradient */}
        <div className="absolute inset-0 bg-none bg-[radial-gradient(circle_10000px_at_0%_100px,#0a0a0a,transparent)]"></div>
      </div>
    </div>
  );
};

export default Backgroundgradient;