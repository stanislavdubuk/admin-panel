import { Visibility } from '@material-ui/icons';
import './WidgetSmall.css';

const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
      <h3 className='widgetSmallTitle'>New Join Members</h3>
      <ul className='widgetSmallList'>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Avatar'
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Avatar'
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Avatar'
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Avatar'
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmallListItem'>
          <img
            src='https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Avatar'
            className='widgetSmallImg'
          />
          <div className='widgetSmallUser'>
            <span className='widgetSmallUserName'>Anna Keller</span>
            <span className='widgetSmallUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmallButton'>
            <Visibility className='widgetSmallIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
