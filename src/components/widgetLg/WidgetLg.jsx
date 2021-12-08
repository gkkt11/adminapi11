import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({ type }) => {
      return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://d1fdloi71mui9q.cloudfront.net/uRmLFXTkQTrKKv2l3f0S_738Vp7Z0uOJi6pS7"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">YutSai88</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/72721285_2575398655853144_4973392105213788160_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGV1rCXgCCqo-o2izsjsnyX5cD6zFuYkS7lwPrMW5iRLt9v_jS1ky48m7d8YP3a-Xn7uthIIo23VAByPGEeitB3&_nc_ohc=tx4EUk9h9FoAX8qpozT&_nc_ht=scontent.fsgn5-6.fna&oh=e2361798638068ef913272824057e0f0&oe=61D4B4F1"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Jennie</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/44836939_2010540125672336_2169993361144938496_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGSpTNa5rMKnU9lKwqBhKSuX0mPwyeSOEFfSY_DJ5I4QWGvMGtlfaoPxzGSy62CNqb3FiPAiVh-V8ujlpzNgdcO&_nc_ohc=ootv8zaOTQcAX--bKnm&_nc_ht=scontent.fsgn5-10.fna&oh=bd54cb1e6e83767a06e3743af3658495&oe=61D46FE0"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">RoSé</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://cdn-img.thethao247.vn/upload/thanhtung/2020/01/13/dap-hop-giay-g-dragon.png"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">GD</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    );
}