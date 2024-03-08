This is the homepage of the **Chicago Coffee Chat**, welcome to visit: https://www.cfcht.top/



## Updating method

Change on the github and the website will be updated in minutes

### 1. Update weekly information
in `/app/page.tsx`

Replace the following part with your new content published for wechat or xhs. You could copy the following content as the format inside the chatgpt and inform it to change your content to the same format.
```css
        {/* TODO: Change the content for weekly events' information below */}
        <h2 className="text-2xl font-bold mb-2">【本周安排】报名中</h2>
        <p className="mb-4">3/10 周日 1PM - 4PM<br />️小桌Shift制主题聊天 （i人友好）<br />限定报名人数：9人，微信限定4人</p>
        <p className="mb-4">320 River Bar<br />📍320 N Dearborn St, Chicago, IL 60654<br />Located in: The Westin Chicago River North</p>
        <a href="https://www.eventbrite.co.nz/e/cfcht-310-1pm-tickets-858290468897?aff=oddtdtcreator" target="_blank" className="inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">报名🔗</a>
        <p className="mt-4">本次活动主题投票（此投票不等于报名）<br /><a href="https://forms.gle/3BLyjCJshx5oz3Uv8" className="text-blue-600 hover:underline" target="_blank">点击这里投票</a></p>
        <p className="mt-4">报名成功的各位，饮品统一预订，点单Google Form链接<br /><a href="https://forms.gle/SiBYXj3vpWv8xURL6" className="text-blue-600 hover:underline" target="_blank">点击打开填写</a></p>
        <p className="mt-4 italic">*报名成功后，如无法出席请在eventbrite取消，平台waitlist将自动补位，请各位留意自己的邮箱</p>
        <p className="mt-4 font-bold">那么各位，这周日见！🌞</p>

```
### 2. Update previous events
in `/public`

Please upload your image in ".png/.jpg" format to the /public folder

in `/app/events/page.tsx`

Add a list like the given format which contain the image name, weburl, the describtion.

```html
  // Add the events as the following template ahead
  {
    imageUrl: '/mar3coffeechat.jpg', // 替换为图片路径
    websiteUrl: 'http://xhslink.com/u4Qy9C', // 替换为对应的网站链接
    altText: '3/3 主题性小桌聊天@Sawada Coffee', // 图片的替代文本
  },
```

