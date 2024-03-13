This is the homepage of the **Chicago Coffee Chat**, welcome to visit: https://www.cfcht.top/



## Updating method

Change on the github and the website will be updated in minutes

### 1. Update weekly information
in `/app/page.tsx`

You could simply 1. use Chatgpt to generate the content , and 2.replace the marked part (Event details) with generated content.

#### 1.1 Please copy following on Chatgpt and replace [your content here] (at the end) with your content published for wechat or xhs:
```css
      {/* TODO: Change the content for weekly events' information below */}
      {/* Event Details Replacement Start */}
        <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
        <p className="mb-4">3/16 周六 1PM - 2:30PM<br />🔥室内游戏<br />33🔪/人（含税），参与者将到店每人分别向店家付款（店家只接受信用卡）<br />限定报名人数：20人，Waitlist人数：5人</p>
        <p className="mb-4">Activate - Chicago (Oak Brook)<br />📍1600 16th St Unit 6, Oak Brook, IL 60523<br />（距离Loop车程大概30分钟，请各位合理安排出行时间）<br />看需求灵活变通：游戏结束后，大家想的话可以一起去看染绿的湖，散散步</p>
        <a href="https://www.eventbrite.com/e/861313109697?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
        <p className="mt-4">*报名成功，但未及时到场：店家如要求损失费，请未到场的个人承担全部所需费用</p>
        <p className="mt-4">*报名成功后，如无法出席请在eventbrite取消。平台waitlist将发送补位邮件，请大家留意自己的邮箱</p>
        <p className="mt-4">*请大家至少提前一天取消</p>
        <p className="mt-4 font-bold">那么各位，这周六见！🌞</p>
      {/* Event Details Replacement End */}

please change the following content for the next.js as above sample format, do not use react:

[your content here]

```
#### 1.2 copy the generated content to replace content between {Event Details Replacement Start/End}

### 2. Update previous events
in `/public`

Please upload your image in ".png" or ".jpg" format to the /public folder

in `/app/events/page.tsx`

Add a list like the given format which contain the image name, weburl, the describtion.

```html
  // Add the events as the following template ahead
  {
    imageUrl: '/name.xxx', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    websiteUrl: 'http://xhslink.com/u4Qy9C', // 替换为对应的网站链接
    altText: '3/3 主题性小桌聊天@Sawada Coffee', // 图片的替代文本
  },
```

### video Introducation
https://drive.google.com/file/d/1oJl5yBlkEYLyGjuDoG95veQMnFeUxsWN/view?usp=sharing

