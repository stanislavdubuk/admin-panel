import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active Users'
      />
      <div className='homeWidgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
