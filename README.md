# gus-react-calendar
A react component to display calendars with Spot and Range bars resources displayed on it.

![gus-react-calendar demo](https://raw.githubusercontent.com/guillaumegustin/gus-react-calendar/master/gus-react-calendar-demo.png)

## getting started
`npm install -s gus-react-calendar`  
or  
`yarn add gus-react-calendar`

Then in your app:
```js
import PwaInstallPopupIOS from 'react-pwa-install-ios';

const MyComponent = () => {
  return (
    <GusReactCalendar
        year={2019}  
        month={11}
        locale={'en'}
        data={data}
      >
    </GusReactCalendar>
  );
};
```
### data structure
data looks like this :
```js
const data = {
  title: 'Data 1', // title for legend
  type: 'bar', // bar or spot
  color: '#baf2e7', // color of the bar
  serie: [{ // if type==bar : start / end should be defined
    start: "2019-12-01 4:30",
    end: "2019-12-01 5:40",
  }, {
    start: "2019-12-01 06:30",
    end: "2019-12-01 07:45",
  },
  {
    start: "2019-12-01 09:30",
    end: "2019-12-01 10:59",
  }
}, {
  title: 'Data 2',
  type: 'bar',
  color: '#7feed8',
  serie: [{
    start: "2019-12-01 19:30",
    end: "2019-12-02 07:00",
  }, {
    start: "2019-12-01 10:30",
    end: "2019-12-01 15:45",
  },
},
{
  title: 'change',
  type: 'spot',
  color: '#FFA69E',
  serie: [{ // if type==spot : time should be defined
    time: "2019-12-01 04:20",
  },
  {
    time: "2019-11-03 11:40",
  }, {
    time: "2019-12-01 05:40",
  }, {
    time: "2019-12-01 06:50",
  },
  // [...]
}];
```

## Run locally and contribute
- clone repo
- `yarn install`
- Test component by launching storybook with `yarn storybook`
- Suggest any improvement by submitting a Pull request !

## contributors
[Guillaume Gustin](https://github.com/guillaumegustin)

