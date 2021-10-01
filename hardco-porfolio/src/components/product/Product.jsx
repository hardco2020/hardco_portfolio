import { CheckCircle } from "@material-ui/icons";
import "./product.scss";
import LightSpeed from "react-reveal/LightSpeed";
import ReactPlayer from "react-player";
export default function Product({ workData }) {
const videos = `../assets/Videos/${workData.video}`
  return (
    <div className="product" id="product">
      <div className="productLeft">
        <div className="productIntro">
          <p className="title">{workData.title}</p>
          <p className="desc">{workData.desc}</p>
          <LightSpeed duration={2000}>
            <div>
              {workData.featured.map((feature) => {
                return (
                  <div className="featured">
                    <CheckCircle className="featuredIcon" />
                    {feature.title}
                  </div>
                );
              })}
            </div>
          </LightSpeed>
        </div>
      </div>
      <div className="productRight">
        <div className="item">
          <img
            src="../assets/computer_front.jpeg"
            alt=""
            className="desktopImg"
          />
          <a href={workData.url}>
          <ReactPlayer
            volume={0}
            muted={true}
            url={videos}
            loop={true}
            className="productImg"
            playing={true}
            width="75%"
            // controls = {true}
          />
          </a>
          {/* <img src={"../"+workData.productImg} alt="" className="productImg" /> */}
        </div>
      </div>
    </div>
  );
}
