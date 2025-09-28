// import Link from "next/link"

// export default function events() {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
//       </main>
//     )
//   }

import Link from 'next/link';

const groupsData = [
     // Add the events as the following template ahead
  {
    imageUrl: '/小红书.jpg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    altText: 'CFCHT活动群', // 图片的替代文本
  },
  {
    imageUrl: '/ershouqun.jpeg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    altText: 'CFCHT微信二手群--无广告🪟 （为确保无广二维码已停用，请想进群的大家添加管理员微信）', // 图片的替代文本
  },
  {
    imageUrl: '/manager.jpeg', // 替换为图片路径,请注意后缀名".jpg"或者".png"要和你上传的图片相同
    altText: 'CFCHT管理员--🔗联系，备注来意', // 图片的替代文本
  },
];

export default function groups() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupsData.map((group, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={group.imageUrl} alt={group.altText} />
            <div className="px-6 py-4">
                <a target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:underline">
                  {group.altText}
                </a>
            </div>
          </div>
        ))}
      </div>
      <a href="/" style={{
        display: 'inline-block',
        padding: '10px 20px',
        margin: '10px',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
        textAlign: 'center',
        // Add more styling as needed
      }}>Homepage</a>
    </main>
  );
}
