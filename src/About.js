
const About = () => {
  return ( 
    <div id="aboutMe">

      <div className="">
        <h2 className="mb-5">About Page</h2>
        <div id="aboutLogoWrapper" className="container">
      </div>

      <div id="aboutMeWrapper" className="row themeColorBody align-items-center">
        <div className="container" id="aboutMe">
          <div id="aboutMeTitle" className="col-12 ">
            <h2 className="themeColorText">Who am I?</h2>
          </div>
          <div id="aboutMeText" className="col-12 themeColorText">
            <div>I’m a former film & TV drama camera engineer of 12 years turned self-taught developer. <br /><br />
            <h2>TL;DR</h2> This is my personal site where I'll share my skills, thoughts and ambitions.
            <br/><br/>
            A little about myself... - Well, my name's Sam. I'm a Developer currently living and working in Belfast.  <br/><br/>
            I've been coding for a number of years in and out for side projects, other work related projects and building drones ✈️ for my company CineCopters.  I was a camera engineer for film and TV productions for 12 years but I've now taken to go coding full time. 
            <br /><br />
            I’m an extremely driven person and a fast learner with a "challenge accepted" approach to anything I don't know how to do.   I find I learn new skills most efficiently when coding real world solutions for real world problems. 
            <br /><br />
            I also code for fun and for personal projects.   For example, when I first saw a  
            <strong><a id="mirrorIntroLink" href="/smartMirror.php" className="themeColorText"> “smart mirror”</a></strong>  I knew that I wanted to build one of my own.  So I did.
            <br /><br />
            I love a challenge, mental or otherwise and firmly believe it’s a sad day when you don’t learn something new.   Because of this I’m always looking to expand my knowledge in languages and tools etc (both back and front end) while refining the skills I already have to get as close to perfection as possible. <br /><br />My goal is to become proficient in both front and back end development culminating in becoming a full stack developer.
            <br /><br />
            If you have any questions or would like to get in touch I'd love to hear from you!
            </div>
            <div id="aboutBounceBtn" className="arrow bounce"><i className="fa fa-angle-down fa-3x" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default About;