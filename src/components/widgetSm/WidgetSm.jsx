import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t39.30808-6/256828023_944630026469354_8423425135675495872_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGAUTNWb11r2wji_gWkyr9trbRWVhrhG9mttFZWGuEb2c2jdxpM9VeONrU6kYPp0QL6jpEi_rz5Wygf4jyxv-WY&_nc_ohc=msRNPuKaU18AX_kNPQv&_nc_ht=scontent.fsgn5-7.fna&oh=ff6d42167fe3611fff3ef6b5d0ba2d25&oe=61B3B53C"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Khann</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/60229174_2677021462524130_6882849550432731136_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFXtUOIKMGbbvT5ispBzPGNjqtp1aPaCV2Oq2nVo9oJXZmCtwRKMZqaUwitk-DtaldVIkALIiWuXhuTq-zZhRP6&_nc_ohc=wUUfdgln3O8AX_UsYwD&_nc_ht=scontent.fsgn5-8.fna&oh=2e38462747b9b2b2464b2b96f1d82755&oe=61D401FE"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tcer.II</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/69164033_2470466176570519_4660972133948588032_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeESa2XUUwgiXUiUC2wCVt7YlEEWtgppO1WUQRa2Cmk7VRJUvmP9KKuMElbKjKnQ3VBtZK-8H2BMBzixCPUcrCvh&_nc_ohc=r2pIQDmPyQ4AX9EMsl4&_nc_ht=scontent.fsgn5-9.fna&oh=161b17acf77966efe64318f74af9c105&oe=61D49B18"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">TBoo</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/49015670_2204129859801439_7659547446216753152_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeFMZGBNtQ29a9pD8k1p566cW_7bqa2ItE1b_tuprYi0TT9UpUOS6I2OQ9mRBPhpMn6potud94R-zMip0tKAWDsR&_nc_ohc=xtGUoVO74WcAX-dPV9z&_nc_ht=scontent.fsgn5-9.fna&oh=a4992a433445680e043c95a67e3e9cd8&oe=61D39380"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">HTin</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        {/* <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li> */}
      </ul>
    </div>
  );
}