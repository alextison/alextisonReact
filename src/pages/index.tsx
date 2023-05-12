import Image from "next/image";
import Icon from "../components/Icon";

function Home() {
  return (
    <>
      <div id="landing-about">
        <div className="left-part">
          <p className="welcome-message">Hello!</p>
          <div className="name weight500">
            <p>
              I'm <span className="yellow-text">Alexandre Tison</span>
              <span className="grey-text">.</span>
            </p>
            <p>a Front Web Developer.</p>
          </div>
          <div className="quote weight300">
            Front-end Web Developer based in Lille, France.
            <br />I am developing websites with this subtlety note that I love
            so much.
          </div>
          <ul>
            <a>
              <li className="weight300">Follow me</li>
            </a>
            <a href="https://github.com/alextison/" target="_blank">
              <li>
                <Icon
                  fill={"#828282"}
                  hoverFill={"#f1f1f1"}
                  size={"30"}
                  d={
                    "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  }
                />
              </li>
            </a>
            <a href="https://alextison.com/" target="_blank">
              <li>
                <Icon
                  fill={"#828282"}
                  hoverFill={"#f1f1f1"}
                  size={"30"}
                  d={
                    "M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"
                  }
                />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/%E2%98%81%EF%B8%8F-alexandre-tison-29b859197/"
              target="_blank"
            >
              <li>
                <Icon
                  fill={"#828282"}
                  hoverFill={"#f1f1f1"}
                  size={"30"}
                  d={
                    "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                  }
                />
              </li>
            </a>
          </ul>
          <div className="buttons-row weight500">
            <a href="mailto:alextison@icloud.com?subject=Mail from alextison Website">
              <Icon
                fill={"#1b1b1b"}
                hoverFill={"#f1f1f1"}
                size={"30"}
                d={
                  "M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
                }
              />
              Mail Me
            </a>
            <a href="CV-Tison-Alexandre.pdf" target="_blank" download>
              <Icon
                fill={"#1b1b1b"}
                hoverFill={"#f1f1f1"}
                size={"30"}
                d={
                  "M14 10h5l-7 8-7-8h5v-10h4v10zm4.213-8.246l-1.213 1.599c2.984 1.732 5 4.955 5 8.647 0 5.514-4.486 10-10 10s-10-4.486-10-10c0-3.692 2.016-6.915 5-8.647l-1.213-1.599c-3.465 2.103-5.787 5.897-5.787 10.246 0 6.627 5.373 12 12 12s12-5.373 12-12c0-4.349-2.322-8.143-5.787-10.246z"
                }
              />
              Download CV
            </a>
          </div>
        </div>
        <div className="right-part">
          <div>
            <Image
              className="landing-about-img-hexagon"
              src="/img/landing-hexagon.svg"
              width={300}
              height={300}
              alt="Profile Picture Hexagon Background"
            />
            <Image
              className="landing-about-img-circle"
              src="/img/landing-circle.svg"
              width={300}
              height={300}
              alt="Profile Picture Circle Background"
            />
            <Image
              className="landing-about-img"
              src="/img/Profile_Picture_IRL_Better_Quality.webp"
              width={340}
              height={340}
              quality={100}
              alt="Profil Picture"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
